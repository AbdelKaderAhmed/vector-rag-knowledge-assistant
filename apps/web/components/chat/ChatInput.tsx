import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export const ChatInput = () => (
  <div className="border-t bg-background p-4">
    <div className="max-w-3xl mx-auto flex gap-2">
      <input 
        className="flex-1 rounded-md border p-3 focus:outline-none focus:ring-2"
        placeholder="Ask anything about your documents..."
      />
      <Button size="icon"><SendHorizontal className="w-4 h-4" /></Button>
    </div>
  </div>
);