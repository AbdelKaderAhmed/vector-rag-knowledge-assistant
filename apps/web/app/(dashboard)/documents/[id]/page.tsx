"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Trash2, FileText, BarChart3, Database } from "lucide-react";

export default function DocumentDetailsPage() {
  const { id } = useParams();

  // Mock data: In production, fetch via server action or SWR
  const doc = {
    name: "Project_Specs_v2.pdf",
    status: "Indexed",
    pages: 42,
    chunks: 120,
    size: "2.4 MB",
    uploaded: "2026-06-10",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">{doc.name}</h1>
          <Badge>{doc.status}</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><MessageSquare className="mr-2 h-4 w-4" /> Open Chat</Button>
          <Button variant="destructive"><Trash2 className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Metadata Panel */}
        <Card className="col-span-1 border-[#27272A] bg-card">
          <CardHeader><CardTitle>Metadata</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <InfoRow label="Size" value={doc.size} />
            <InfoRow label="Pages" value={doc.pages.toString()} />
            <InfoRow label="Uploaded" value={doc.uploaded} />
          </CardContent>
        </Card>

        {/* Chunk Stats Panel */}
        <Card className="col-span-2 border-[#27272A] bg-card">
          <CardHeader><CardTitle>Chunk Statistics</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <StatBox icon={Database} label="Total Chunks" value={doc.chunks.toString()} />
            <StatBox icon={BarChart3} label="Avg. Chunk Size" value="512 tokens" />
          </CardContent>
        </Card>
      </div>

      {/* Preview Area */}
      <Card className="border-[#27272A] bg-[#18181B]">
        <CardHeader><CardTitle>Document Preview</CardTitle></CardHeader>
        <CardContent className="h-[500px] flex items-center justify-center text-muted-foreground border-t border-[#27272A] bg-black/20">
          <p>Preview rendering engine initialized for {doc.name}...</p>
        </CardContent>
      </Card>
    </div>
  );
}

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

const StatBox = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#27272A]">
    <Icon className="h-5 w-5 text-indigo-500" />
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);