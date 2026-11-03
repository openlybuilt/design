import { CommentThread, type ThreadComment } from "@/vendor/arc/comment-thread/comment-thread";

export function HeadlineDiscussion() {
  return (
    <CommentThread
      title="Hero headline"
      currentUser={{id: "me", name: "Alex"}}
      defaultComments={[]}
      
      
    />
  );
}
