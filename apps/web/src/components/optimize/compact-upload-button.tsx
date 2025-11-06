import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useIntlayer } from "react-intlayer";
import { Button } from "@/components/ui/button";
import { isSvgFile } from "@/lib/file-utils";
import { cn } from "@/lib/utils";

type CompactUploadButtonProps = {
  onUpload: (file: File) => void;
  className?: string;
};

export function CompactUploadButton({
  onUpload,
  className,
}: CompactUploadButtonProps) {
  const { header } = useIntlayer("optimize");

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file && isSvgFile(file)) {
        onUpload(file);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/svg+xml": [".svg"],
    },
    multiple: false,
    noClick: false,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "inline-flex cursor-pointer rounded-md transition-all",
        className
      )}
    >
      <input {...getInputProps()} />
      <Button
        className="py-5"
        size="sm"
        type="button"
        variant={isDragActive ? "default" : "outline"}
      >
        <span className="i-hugeicons-upload-02 mr-1 size-4" />
        {header?.reupload || "Reupload"}
      </Button>
    </div>
  );
}
