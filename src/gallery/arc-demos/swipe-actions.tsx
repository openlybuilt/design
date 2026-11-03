import { SwipeActions, SwipeActionsRow } from "@/vendor/arc/swipe-actions/swipe-actions";
import { Archive, MailOpen } from "lucide-react";

export function Inbox() {
  const messages = [{id: "1", subject: "A new update"}, {id: "2", subject: "Ready for review"}];
  return (
    <SwipeActions label="Inbox">
      {messages.map(message => (
        <SwipeActionsRow
          key={message.id}
          label={message.subject}
          leading={[{ label: "Unread", icon: <MailOpen size={18} />, tone: "accent", keepRow: true, onSelect: () => {} }]}
          trailing={[{ label: "Archive", icon: <Archive size={18} />, tone: "danger", onSelect: () => {} }]}
        >
          <span>{message.subject}</span>
        </SwipeActionsRow>
      ))}
    </SwipeActions>
  );
}
