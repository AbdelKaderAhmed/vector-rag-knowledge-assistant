"use client";

import { useState } from "react";
import { Upload, File, CheckCircle2, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const FileUpload = () => {
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  return (
    <div className="w-full max-w-xl mx-auto p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-4 bg-muted/20 hover:bg-muted/30 transition-colors">
      {status === 'idle' && (
        <>
          <Upload className="w-12 h-12 text-muted-foreground" />
          <h3 className="text-lg font-semibold">Upload your documents</h3>
          <p className="text-sm text-muted-foreground text-center">Drag and drop or click to browse files (PDF, TXT)</p>
          <Button onClick={() => setStatus('uploading')}>Select Files</Button>
        </>
      )}

      {status === 'uploading' && (
        <div className="w-full space-y-2">
          <div className="flex justify-between text-sm">
            <span>Uploading...</span>
            <span>45%</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[45%] animate-pulse" />
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex flex-col items-center gap-2 text-green-600">
          <CheckCircle2 className="w-12 h-12" />
          <p className="font-medium">Upload Successful!</p>
          <Button variant="outline" onClick={() => setStatus('idle')}>Upload More</Button>
        </div>
      )}
    </div>
  );
};