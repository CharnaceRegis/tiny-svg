/**
 * File download utilities
 */

/**
 * Downloads content as a file with specified filename and MIME type
 * @param content - The content to download
 * @param fileName - The name of the file to download
 * @param mimeType - MIME type of the file (default: text/plain)
 */
export const downloadFile = (
  content: string | Blob,
  fileName: string,
  mimeType = "text/plain;charset=utf-8"
): void => {
  const blob =
    content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Downloads SVG content as a file
 * @param svg - The SVG content to download
 * @param fileName - The name of the file to download
 */
export const downloadSvg = (svg: string, fileName: string): void => {
  downloadFile(svg, fileName, "image/svg+xml");
};

/**
 * Downloads a Blob as a file
 * @param blob - The Blob to download
 * @param fileName - The name of the file to download
 */
export const downloadBlob = (blob: Blob, fileName: string): void => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
