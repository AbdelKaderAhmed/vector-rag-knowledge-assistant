"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Database, HardDrive, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { title: "Total Documents", value: "1,240", icon: FileText },
  { title: "Total Chunks", value: "45,290", icon: Database },
  { title: "Total Queries", value: "8,921", icon: MessageSquare },
  { title: "Storage Used", value: "75%", icon: HardDrive },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your knowledge base performance.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-[#27272A]">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-card/50 backdrop-blur-sm border-[#27272A]">
          <CardHeader><CardTitle>Recent Documents</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {["Technical_Manual_v2.pdf", "Research_Paper_AI.pdf", "Meeting_Notes_06-2026.txt"].map((file) => (
              <div key={file} className="flex items-center justify-between p-3 rounded-lg border border-[#27272A] bg-background/50">
                <span className="text-sm truncate">{file}</span>
                <Button variant="ghost" size="sm"><ArrowRight className="w-4 h-4" /></Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-card/50 backdrop-blur-sm border-[#27272A]">
          <CardHeader><CardTitle>Quick Actions</CardTitle></CardHeader>
          <CardContent className="grid gap-2">
            {[
              { label: "Upload New Document", href: "/upload", icon: Plus },
              { label: "Start New Chat", href: "/chat", icon: MessageSquare },
              { label: "View All Documents", href: "/documents", icon: FileText },
            ].map((action) => (
              <Link key={action.label} href={action.href}>
                <Button variant="outline" className="w-full justify-start gap-2 h-12">
                  <action.icon className="w-4 h-4" />
                  {action.label}
                </Button>
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}