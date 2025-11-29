// Type exports

// Config exports
export { defaultGlobalSettings, defaultSvgoPlugins } from "./default-config";
// Preset exports
export { compressionPresets, getPresetConfig } from "./presets";
export type {
  CompressionPreset,
  CompressionResult,
  PluginOverride,
  SvgBatchItem,
  SvgBatchResult,
  SvgoGlobalSettings,
  SvgoPluginConfig,
  SvgoPreset,
  SvgProcessingOptions,
  SvgState,
} from "./types";
// Utility exports
export {
  calculateCompressionRatio,
  calculateSize,
  createSvgState,
  formatSize,
  updateCompressionResult,
  validateSvg,
} from "./utils";
