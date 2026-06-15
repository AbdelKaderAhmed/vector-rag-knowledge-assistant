"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/documents/DataTable";

// Mock data remains the same
const documents = [
  { id: "1", name: "Project_Specs.pdf", pages: 42, chunks: 120, status: "Indexed", created: "2026-06-10" },
  { id: "2", name: "User_Research.pdf", pages: 15, chunks: 45, status: "Processing", created: "2026-06-11" },
];

export default function DocumentsPage() {
  const [search, setSearch] = useState("");

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">Manage your knowledge base files.</p>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search documents..." 
            className="pl-8" 
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Your modular DataTable implementation */}
      <DataTable data={filteredDocs} />
    </div>
  );
}