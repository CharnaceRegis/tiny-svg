import { create } from "zustand";

export type ExportScale =
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.5
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8;

type UiState = {
  activeTab: string;
  isCollapsed: boolean;
  isMobileSettingsOpen: boolean;
  exportScale: ExportScale | null;
  exportWidth: number;
  exportHeight: number;
};

type UiActions = {
  setActiveTab: (tab: string) => void;
  toggleCollapsed: () => void;
  setIsCollapsed: (collapsed: boolean) => void;
  toggleMobileSettings: () => void;
  setIsMobileSettingsOpen: (open: boolean) => void;
  setExportScale: (scale: ExportScale | null) => void;
  setExportWidth: (width: number) => void;
  setExportHeight: (height: number) => void;
  setExportDimensions: (width: number, height: number) => void;
};

const initialState: UiState = {
  activeTab: "original",
  isCollapsed: false,
  isMobileSettingsOpen: false,
  exportScale: 2,
  exportWidth: 0,
  exportHeight: 0,
};

export const useUiStore = create<UiState & UiActions>((set) => ({
  ...initialState,
  setActiveTab: (tab) => set({ activeTab: tab }),
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  setIsCollapsed: (collapsed) => set({ isCollapsed: collapsed }),
  toggleMobileSettings: () =>
    set((state) => ({ isMobileSettingsOpen: !state.isMobileSettingsOpen })),
  setIsMobileSettingsOpen: (open) => set({ isMobileSettingsOpen: open }),
  setExportScale: (scale) => set({ exportScale: scale }),
  setExportWidth: (width) => set({ exportWidth: width }),
  setExportHeight: (height) => set({ exportHeight: height }),
  setExportDimensions: (width, height) =>
    set({ exportWidth: width, exportHeight: height }),
}));
