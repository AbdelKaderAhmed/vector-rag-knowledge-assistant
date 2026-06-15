"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Bot, User, FileText, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Mocking a streaming response handler
export default function ChatSessionPage() {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState<any[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // In production, fetch history from API using sessionId
    console.log(`Loading session: ${sessionId}`);
  }, [sessionId]);

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Messages would map here */}
          <div className="text-center text-muted-foreground pt-20">
            Conversation Thread: <span className="font-mono font-bold text-primary">{sessionId}</span>
          </div>
        </div>
        
        {/* Input Area (Shared Pattern) */}
        <div className="p-4 border-t border-[#27272A] bg-[#09090B]">
          <div className="max-w-3xl mx-auto flex gap-2">
            <input className="flex-1 p-3 rounded-lg bg-[#18181B] border border-[#27272A]" placeholder="Continue research..." />
            <Button>Send</Button>
          </div>
        </div>
      </div>

      {/* Persistent Source Drawer */}
      <aside className={cn(
        "w-80 border-l border-[#27272A] bg-card transition-all duration-300",
        !isSidebarOpen && "hidden"
      )}>
        <div className="p-4 font-semibold border-b border-[#27272A]">Retrieved Sources</div>
        <ScrollArea className="h-full p-4 space-y-4">
          <div className="p-3 border border-[#27272A] rounded-lg cursor-pointer hover:bg-accent">
            <div className="flex items-center gap-2 font-medium"><FileText className="w-4 h-4" /> Project_Specs_v2.pdf</div>
            <p className="text-xs text-muted-foreground mt-1">Chunk #45 - "...utilizes a RAG pattern for retrieval..."</p>
          </div>
        </ScrollArea>
      </aside>

      {/* Drawer Toggle */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-4 top-1/2"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}