import { ToastStack, ToastStackProvider, useToastStack } from "@/vendor/arc/toast-stack/toast-stack";

function PublishButton() {
  const { toast, update } = useToastStack();
  async function publish() {
    const id = toast({ type: "loading", title: "Publishing" });
    await Promise.resolve();
    update(id, { type: "success", title: "Published", action: { label: "View", onClick: () => {} } });
  }
  return <button className="save" type="button" onClick={publish}>Publish</button>;
}

export function App() {
  return <ToastStackProvider><PublishButton /><ToastStack /></ToastStackProvider>;
}
