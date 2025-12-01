import React from "react";

// Lazy import refractor to keep bundle size small
let refractorInstance: typeof import("refractor") | null = null;

async function getRefractor() {
  if (!refractorInstance) {
    // Only load XML/HTML support instead of all languages
    const refractor = await import("refractor");
    refractorInstance = refractor;
  }
  return refractorInstance;
}

export function hastToReact(
  node: {
    type: string;
    value?: string;
    tagName?: string;
    properties?: { className?: string[] };
    children?: unknown[];
  },
  key: string
): React.ReactNode {
  if (node.type === "text") {
    return node.value;
  }
  if (node.type === "element" && node.tagName) {
    const { tagName, properties, children } = node;
    return React.createElement(
      tagName,
      {
        key,
        className: properties?.className?.join(" "),
      },
      children?.map((c, i) => hastToReact(c as typeof node, `${key}-${i}`))
    );
  }
  return null;
}

export async function highlight(
  code: string,
  lang: string
): Promise<React.ReactNode[]> {
  try {
    const refractor = await getRefractor();
    const id = `${lang}:${code}`;
    const tree = refractor.refractor.highlight(code, lang);
    const nodes = tree.children.map((c, i) =>
      hastToReact(c as Parameters<typeof hastToReact>[0], `${id}-${i}`)
    );
    return nodes;
  } catch {
    return [code];
  }
}
