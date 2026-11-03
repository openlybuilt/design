import { JsonViewer } from "@/vendor/arc/json-viewer/json-viewer";

export function WebhookPayload() {
  return (
    <JsonViewer
      data={{ status: "ready", items: [1, 2, 3] }}
      rootName="event"
      defaultExpandDepth={2}
      maxHeight={360}
      
    />
  );
}
