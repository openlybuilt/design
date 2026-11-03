import { ResizablePanel, ResizablePanels } from "@/vendor/arc/resizable-panels/resizable-panels";

export function MailLayout() {
  return (
    <div style={{ height: 220 }}>
      <ResizablePanels label="Mail">
        <ResizablePanel id="folders" label="Folders" defaultSize={22} minSize={160} collapsible>
          <p>Folders</p>
        </ResizablePanel>
        <ResizablePanel id="messages" label="Messages" defaultSize={78}>
          <p>Messages</p>
        </ResizablePanel>
      </ResizablePanels>
    </div>
  );
}
