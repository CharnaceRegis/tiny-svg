export interface DataUriResult {
  minified: string;
  base64: string;
  urlEncoded: string;
  minifiedSize: number;
  base64Size: number;
  urlEncodedSize: number;
}

/**
 * Converts SVG content to various Data URI formats
 * @param svg - The SVG string content
 * @returns Object containing different Data URI formats and their sizes
 */
export function svgToDataUri(svg: string): DataUriResult {
  // Minified Data URI (using encodeURIComponent with optimizations)
  const minified = `data:image/svg+xml,${encodeURIComponent(svg).replace(/%20/g, " ").replace(/%3D/g, "=").replace(/%3A/g, ":").replace(/%2F/g, "/")}`;

  // Base64 Data URI
  const base64 = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;

  // URL Encoded Data URI
  const urlEncoded = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  return {
    minified,
    base64,
    urlEncoded,
    minifiedSize: new Blob([minified]).size,
    base64Size: new Blob([base64]).size,
    urlEncodedSize: new Blob([urlEncoded]).size,
  };
}

/**
 * Formats byte size to human-readable format
 * @param bytes - The size in bytes
 * @returns Formatted string (e.g., "1.23 KB")
 */
export function formatBytes(bytes: number): string {
  if (bytes === 0) {
    return "0 B";
  }

  const k = 1024;
  const sizes = ["B", "KB", "MB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`;
}
