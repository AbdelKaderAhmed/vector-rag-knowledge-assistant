"use client";

import { useState } from "react";
import { Search, Database, Code2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const chunks = [
  { id: "c1", doc: "Project_Specs.pdf", content: "The system architecture utilizes a RAG pattern...", embedding: "ada-002", status: "Active" },
  { id: "c2", doc: "User_Research.pdf", content: "Users reported a need for faster ingestion...", embedding: "ada-002", status: "Active" },
  { id: "c3", doc: "Project_Specs.pdf", content: "Safety protocols must be validated...", embedding: "ada-002", status: "Flagged" },
];

export default function KnowledgeBasePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Knowledge Base</h1>
        <p className="text-muted-foreground">Inspect indexed vector chunks and embedding status.</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-[#27272A] bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0"><CardTitle className="text-sm font-medium">Total Chunks</CardTitle><Database className="w-4 h-4" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">45,290</div></CardContent>
        </Card>
        <Card className="border-[#27272A] bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0"><CardTitle className="text-sm font-medium">Vector Dimension</CardTitle><Code2 className="w-4 h-4" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">1536</div></CardContent>
        </Card>
        <Card className="border-[#27272A] bg-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0"><CardTitle className="text-sm font-medium">Embedding Model</CardTitle><CheckCircle2 className="w-4 h-4" /></CardHeader>
          <CardContent><div className="text-2xl font-bold">text-embedding-3</div></CardContent>
        </Card>
      </div>

      {/* Explorer Table Alternative */}
      <div className="rounded-xl border border-[#27272A] bg-card overflow-hidden">
        <div className="p-4 border-b border-[#27272A]">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search chunk content..." className="pl-8" onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>
        
        <div className="w-full">
          {chunks.map((chunk) => (
            <div key={chunk.id} className="grid grid-cols-4 p-4 border-b border-[#27272A] hover:bg-muted/50 items-center text-sm">
              <div className="font-medium">{chunk.doc}</div>
              <div className="text-muted-foreground truncate max-w-[200px]">{chunk.content}</div>
              <div>{chunk.embedding}</div>
              <div>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${chunk.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                  {chunk.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}