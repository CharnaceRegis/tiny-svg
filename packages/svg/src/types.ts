import type { Config as SvgoConfig } from "svgo";

// SVG Core Types
export interface SvgState {
  originalSvg: string;
  compressedSvg: string;
  fileName: string;
  svgoConfig: SvgoConfig;
  compressionRatio?: number;
  originalSize?: number;
  compressedSize?: number;
}

export interface SvgProcessingOptions {
  includeMetadata?: boolean;
  preserveAspectRatio?: boolean;
  optimizeColors?: boolean;
}

export interface CompressionResult {
  success: boolean;
  svg?: string;
  error?: string;
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
}

export interface SvgBatchItem extends SvgState {
  id: string;
  layerName: string;
  nodeId: string;
}

export interface SvgBatchResult {
  items: SvgBatchItem[];
  totalOriginalSize: number;
  totalCompressedSize: number;
  averageCompressionRatio: number;
}

// SVGO Plugin Types
export interface SvgoPluginConfig {
  name: string;
  enabled: boolean;
  description?: string;
  params?: Record<string, unknown>;
}

export interface SvgoGlobalSettings {
  multipass: boolean;
  js2svg: {
    indent: number;
    pretty: boolean;
  };
  svg2js: {
    indent: number;
    pretty: boolean;
  };
  errorReporting: "none" | "throw" | "warn";
}

export interface SvgoPreset {
  name: string;
  description: string;
  config: SvgoConfig;
  plugins: SvgoPluginConfig[];
}

export interface PluginOverride {
  name: string;
  active: boolean;
}

export interface CompressionPreset {
  id: string;
  name: string;
  description: string;
  icon?: string;
  plugins: (string | PluginOverride)[];
  globalSettings?: Partial<SvgoGlobalSettings>;
}
