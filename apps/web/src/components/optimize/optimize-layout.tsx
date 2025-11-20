import { HistoryPanel } from "@/components/history-panel";
import { ConfigPanelLazy } from "@/components/lazy/config-panel-lazy";
import { OptimizeHeader } from "@/components/optimize/optimize-header";
import { OptimizeTabs } from "@/components/optimize/optimize-tabs";
import { RecentSvgs } from "@/components/recent-svgs";
import { UploadBox } from "@/components/upload-box";
import type { HistoryEntry } from "@/lib/svg-history-storage";
import type { SvgoGlobalSettings } from "@/lib/svgo-plugins";

type OptimizeLayoutProps = {
  originalSvg: string;
  compressedSvg: string;
  fileName: string;
  originalSize: number;
  compressedSize: number;
  compressionRate: number;
  isCollapsed: boolean;
  isMobileSettingsOpen: boolean;
  isHistoryPanelOpen: boolean;
  activeTab: string;
  safeGlobalSettings: SvgoGlobalSettings;
  prettifiedOriginal: string;
  prettifiedCompressed: string;
  componentName: string;
  generatedCodes: Map<string, string>;
  isDragging: boolean;
  ui: any;
  recentEntries: HistoryEntry[];
  historyEntries: HistoryEntry[];
  historyCount: number;
  onFileUpload: (file: File) => Promise<void>;
  onCopy: () => Promise<void>;
  onDownload: () => void;
  onToggleSettings: () => void;
  onToggleMobileSettings: () => void;
  onToggleHistoryPanel: () => void;
  onSelectHistoryEntry: (entry: HistoryEntry) => void;
  onDeleteHistoryEntry: (id: string) => void;
  onClearHistory: () => void;
  onTabChange: (tab: string) => void;
};

export function OptimizeLayout({
  originalSvg,
  compressedSvg,
  fileName,
  originalSize,
  compressedSize,
  compressionRate,
  isCollapsed,
  isMobileSettingsOpen,
  isHistoryPanelOpen,
  activeTab,
  safeGlobalSettings,
  prettifiedOriginal,
  prettifiedCompressed,
  componentName,
  generatedCodes,
  isDragging,
  ui,
  recentEntries,
  historyEntries,
  historyCount,
  onFileUpload,
  onCopy,
  onDownload,
  onToggleSettings,
  onToggleMobileSettings,
  onToggleHistoryPanel,
  onSelectHistoryEntry,
  onDeleteHistoryEntry,
  onClearHistory,
  onTabChange,
}: OptimizeLayoutProps) {
  return (
    <div className="flex h-[calc(100vh-61px)] w-screen flex-col md:flex-row">
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile Settings Toggle Button */}
        {!originalSvg && (
          <button
            className="flex items-center justify-between border-b px-4 py-3 transition-colors hover:bg-accent md:hidden"
            onClick={onToggleMobileSettings}
            type="button"
          >
            <span className="font-semibold">{ui?.settings || "Settings"}</span>
            <span
              className={`i-hugeicons-arrow-down-01 size-5 transition-transform ${isMobileSettingsOpen ? "rotate-180" : ""}`}
            />
          </button>
        )}

        {originalSvg && (
          <OptimizeHeader
            compressedSize={compressedSize}
            compressedSvg={compressedSvg}
            compressionRate={compressionRate}
            fileName={fileName}
            historyCount={historyCount}
            isSettingsCollapsed={isCollapsed}
            onCopy={onCopy}
            onDownload={onDownload}
            onFileUpload={onFileUpload}
            onToggleHistoryPanel={onToggleHistoryPanel}
            onToggleSettings={onToggleSettings}
            originalSize={originalSize}
          />
        )}

        <div className="flex-1 overflow-hidden p-4">
          {originalSvg ? (
            <OptimizeTabs
              activeTab={activeTab}
              componentName={componentName}
              compressedSvg={compressedSvg}
              generatedCodes={generatedCodes}
              onTabChange={onTabChange}
              originalSvg={originalSvg}
              prettifiedCompressed={prettifiedCompressed}
              prettifiedOriginal={prettifiedOriginal}
              safeGlobalSettings={safeGlobalSettings}
              ui={ui}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="relative max-w-2xl">
                <RecentSvgs
                  className="-top-4 absolute left-4 z-10"
                  entries={recentEntries}
                />
                <UploadBox isHighlighted={isDragging} onUpload={onFileUpload} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* History Panel */}
      <HistoryPanel
        clearAllLabel={ui?.history?.clearAll || "Clear All"}
        closeLabel={ui?.history?.close || "Close"}
        deleteLabel={ui?.history?.delete || "Delete"}
        emptyMessage={ui?.history?.empty || "No saved SVGs yet"}
        entries={historyEntries}
        isOpen={isHistoryPanelOpen}
        onClearAll={onClearHistory}
        onClose={onToggleHistoryPanel}
        onDeleteEntry={onDeleteHistoryEntry}
        onSelectEntry={onSelectHistoryEntry}
        title={ui?.history?.title || "History"}
      />

      {/* Desktop Settings Panel */}
      {!isCollapsed && (
        <div className="hidden w-80 border-l md:block">
          <ConfigPanelLazy
            className="h-full p-4"
            isCollapsed={isCollapsed}
            onToggleCollapse={onToggleSettings}
          />
        </div>
      )}

      {/* Mobile Settings Panel */}
      {isMobileSettingsOpen && (
        <div className="border-t md:hidden">
          <ConfigPanelLazy
            className="w-full p-4"
            isCollapsed={false}
            onToggleCollapse={onToggleMobileSettings}
          />
        </div>
      )}
    </div>
  );
}
