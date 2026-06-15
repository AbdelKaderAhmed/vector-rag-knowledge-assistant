"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "ai", content: string, sources?: string[] };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([{ role: "ai", content: "Hello! Ask me anything about your knowledge base." }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsLoading(true);

    // Mock RAG response
    setTimeout(() => {
      setMessages((prev) => [...prev, { 
        role: "ai", 
        content: "Based on your technical specs, the architecture utilizes a RAG pattern.",
        sources: ["Project_Specs_v2.pdf"] 
      }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={cn("flex gap-4 max-w-3xl mx-auto", m.role === "ai" ? "bg-[#18181B]/50 p-4 rounded-xl" : "")}>
            {m.role === "ai" ? <Bot className="shrink-0 text-indigo-500" /> : <User className="shrink-0" />}
            <div>
              <p className="leading-relaxed">{m.content}</p>
              {m.sources && (
                <div className="mt-3 flex gap-2">
                  {m.sources.map(s => (
                    <div key={s} className="flex items-center gap-1 text-xs border border-[#27272A] px-2 py-1 rounded-md text-zinc-400">
                      <FileText className="w-3 h-3" /> {s}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && <div className="flex gap-4 max-w-3xl mx-auto p-4"><Loader2 className="animate-spin text-indigo-500" /></div>}
      </div>

      {/* Input Area */}
      <div className="border-t border-[#27272A] bg-[#09090B] p-4">
        <div className="max-w-3xl mx-auto relative">
          <Textarea 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="min-h-[60px] pr-12 resize-none bg-[#18181B] border-[#27272A]"
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          />
          <Button size="icon" className="absolute right-2 bottom-2" onClick={handleSend}><Send className="w-4 h-4" /></Button>
        </div>
      </div>
    </div>
  );
}