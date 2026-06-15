"use client";

import { useState } from "react";
import { Save, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  const [chunkSize, setChunkSize] = useState(512);

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Configuration</h1>
        <p className="text-muted-foreground">Manage your AI and retrieval engine parameters.</p>
      </div>

      <div className="space-y-6">
        {/* LLM Section */}
        <SettingsCard 
          icon={Brain} 
          title="LLM Settings" 
          description="Configure the model and credentials used for generation."
        >
          <div className="grid gap-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Gemini API Key</p>
              <Input type="password" placeholder="AIza..." />
            </div>
          </div>
        </SettingsCard>

        {/* Retrieval Section */}
        <SettingsCard 
          icon={Database} 
          title="Retrieval & Chunking" 
          description="Define how documents are fragmented and retrieved."
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Chunk Size (tokens)</p>
              <Input 
                type="number" 
                value={chunkSize} 
                onChange={(e) => setChunkSize(Number(e.target.value))} 
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Top-K Retrieval</p>
              <Input type="number" defaultValue={5} />
            </div>
          </div>
        </SettingsCard>
      </div>

      <div className="flex justify-end gap-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button><Save className="mr-2 h-4 w-4" /> Save Configuration</Button>
      </div>
    </div>
  );
}

function SettingsCard({ icon: Icon, title, description, children }: any) {
  return (
    <Card className="border-[#27272A] bg-card">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">{children}</CardContent>
    </Card>
  );
}