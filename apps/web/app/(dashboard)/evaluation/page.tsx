"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { label: "Faithfulness", score: 0.94, change: "+0.02" },
  { label: "Context Precision", score: 0.88, change: "-0.01" },
  { label: "Latency (ms)", score: 240, change: "-15" },
  { label: "Retrieval Quality", score: 0.91, change: "+0.05" },
];

const recentEvals = [
  { id: "eval-001", query: "What is the RAG architecture?", faithfulness: 0.95, precision: 0.90, timestamp: "2026-06-12" },
  { id: "eval-002", query: "How to setup API keys?", faithfulness: 0.82, precision: 0.75, timestamp: "2026-06-11" },
];

export default function EvaluationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Model Evaluation</h1>
        <p className="text-muted-foreground">Monitor retrieval and generation quality metrics.</p>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="border-[#27272A] bg-card">
            <CardHeader className="pb-2"><CardTitle className="text-sm text-muted-foreground">{m.label}</CardTitle></CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{m.score}</div>
              <p className={m.change.startsWith("+") ? "text-green-500 text-xs" : "text-red-500 text-xs"}>{m.change} from last run</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Evaluation Log - Custom Table (Div based) */}
      <div className="rounded-xl border border-[#27272A] bg-card overflow-hidden">
        <div className="p-6 border-b border-[#27272A] font-semibold">Recent Evaluation Logs</div>
        
        {/* Table Header */}
        <div className="grid grid-cols-4 px-6 py-3 bg-muted/30 text-xs font-medium text-muted-foreground uppercase border-b border-[#27272A]">
          <div>Query</div>
          <div>Faithfulness</div>
          <div>Precision</div>
          <div>Timestamp</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#27272A]">
          {recentEvals.map((e) => (
            <div key={e.id} className="grid grid-cols-4 px-6 py-4 items-center text-sm">
              <div className="font-medium truncate pr-4">{e.query}</div>
              <div className="font-mono">{e.faithfulness}</div>
              <div className="font-mono">{e.precision}</div>
              <div className="text-muted-foreground">{e.timestamp}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}