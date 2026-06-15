import { cn } from "@/lib/utils";

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const MessageBubble = ({ role, content }: MessageProps) => (
  <div className={cn("flex w-full py-6", role === 'assistant' ? "bg-muted/50" : "")}>
    <div className="max-w-3xl mx-auto px-4 flex gap-4">
      <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", 
        role === 'assistant' ? "bg-primary text-white" : "bg-secondary")}>
        {role === 'assistant' ? "AI" : "Me"}
      </div>
      <div className="prose prose-sm dark:prose-invert mt-1">{content}</div>
    </div>
  </div>
);