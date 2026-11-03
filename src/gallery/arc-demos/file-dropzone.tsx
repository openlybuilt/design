import { FileDropzone } from "@/vendor/arc/file-dropzone/file-dropzone";

export function AttachmentUpload() {
  return (
    <FileDropzone
      accept=".pdf,image/*"
      maxFiles={3}
      maxSize={10 * 1024 * 1024}
      onUpload={async (_item, { onProgress }) => { onProgress(100); }}
    />
  );
}
