import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getStaggerDelay } from "@/lib/animation-utils";
import { formatFileSize, formatTimestamp } from "@/lib/svg-utils";
import { cn } from "@/lib/utils";
import type { HistoryEntry } from "@/types/history";
import { SvgThumbnail } from "./svg-thumbnail";

type HistoryPanelProps = {
  entries: HistoryEntry[];
  isOpen: boolean;
  onClose: () => void;
  onSelectEntry: (entry: HistoryEntry) => void;
  onDeleteEntry: (id: string) => void;
  onClearAll: () => void;
  title: string;
  emptyMessage: string;
  clearAllLabel: string;
  closeLabel: string;
  deleteLabel: string;
};

export function HistoryPanel({
  entries,
  isOpen,
  onClose,
  onSelectEntry,
  onDeleteEntry,
  onClearAll,
  title,
  emptyMessage,
  clearAllLabel,
  closeLabel,
  deleteLabel,
}: HistoryPanelProps) {
  return (
    <Sheet onOpenChange={onClose} open={isOpen}>
      <SheetContent className="w-full sm:max-w-xl" hideDefaultClose side="left">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>{title}</SheetTitle>
            <div className="flex items-center gap-2">
              {entries.length > 0 && (
                <Button
                  onClick={onClearAll}
                  size="sm"
                  type="button"
                  variant="destructive"
                >
                  {clearAllLabel}
                </Button>
              )}
              <SheetClose asChild>
                <Button size="sm" type="button" variant="outline">
                  <span className="i-hugeicons-cancel-01 mr-1.5 size-4" />
                  {closeLabel}
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>

        <div className="mt-6 h-[calc(100vh-8rem)] overflow-y-auto">
          {entries.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="i-hugeicons-file-not-found mb-4 size-20 text-muted-foreground" />
              <p className="font-medium text-lg text-muted-foreground">
                {emptyMessage}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3">
              {entries.map((entry, index) => (
                <div
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-lg border bg-card text-left transition-all hover:border-primary hover:shadow-md",
                    "fade-in slide-in-from-left animate-in"
                  )}
                  key={entry.id}
                  onClick={() => onSelectEntry(entry)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelectEntry(entry);
                    }
                  }}
                  role="button"
                  style={{
                    animationDelay: getStaggerDelay(index),
                  }}
                  tabIndex={0}
                >
                  <div className="aspect-square overflow-hidden bg-muted p-2">
                    <SvgThumbnail svg={entry.compressedSvg} variant="fill" />
                  </div>
                  <div className="p-2">
                    <p
                      className="truncate font-medium text-sm"
                      title={entry.fileName}
                    >
                      {entry.fileName}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-muted-foreground text-xs">
                      <span>{formatTimestamp(entry.timestamp)}</span>
                      <span>{formatFileSize(entry.compressedSize)}</span>
                    </div>
                    {entry.originalSize && entry.compressedSize && (
                      <div className="mt-1 text-green-600 text-xs">
                        -
                        {Math.round(
                          ((entry.originalSize - entry.compressedSize) /
                            entry.originalSize) *
                            100
                        )}
                        %
                      </div>
                    )}
                  </div>
                  <Button
                    aria-label={deleteLabel}
                    className="absolute top-1 right-1 size-6 opacity-0 transition-opacity group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteEntry(entry.id);
                    }}
                    size="icon"
                    title={deleteLabel}
                    type="button"
                    variant="destructive"
                  >
                    <span className="i-hugeicons-delete-02 size-3" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
