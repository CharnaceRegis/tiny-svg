/**
 * Clipboard utilities with fallback handling for restricted environments
 */

/**
 * Checks if the Clipboard API is available
 */
export const isClipboardAvailable = (): boolean =>
  typeof navigator !== "undefined" &&
  typeof navigator.clipboard !== "undefined" &&
  typeof navigator.clipboard.writeText === "function";

/**
 * Fallback method to copy text using a temporary textarea element
 * This works in environments where the Clipboard API is not available
 */
const fallbackCopyToClipboard = (text: string): void => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = "0";
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.background = "transparent";
  textArea.style.opacity = "0";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("Copy command was unsuccessful");
    }
  } finally {
    document.body.removeChild(textArea);
  }
};

/**
 * Copies text to clipboard with automatic fallback handling
 * @param text - The text to copy to clipboard
 * @throws Error if both clipboard API and fallback method fail
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  if (isClipboardAvailable()) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      console.warn("Clipboard API failed, trying fallback method:", error);
    }
  }

  try {
    fallbackCopyToClipboard(text);
  } catch (error) {
    throw new Error(
      `Failed to copy to clipboard: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
