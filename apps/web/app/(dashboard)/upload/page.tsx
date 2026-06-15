"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileText, X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export default function UploadPage() {
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;
    
    const file = acceptedFiles[0];
    
    // Validate file type
    if (file.type !== "application/pdf") {
      setStatus("error");
      setError("Please select a valid PDF file.");
      return;
    }

    // Simulate upload process
    setStatus("uploading");
    setError(null);
    let currentProgress = 0;
    
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setStatus("success");
      }
    }, 300);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: { 'application/pdf': ['.pdf'] }
  });

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-semibold mb-6">Document Upload</h1>

      <div 
        {...getRootProps()} 
        className={cn(
          "border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer",
          isDragActive ? "border-indigo-500 bg-indigo-500/10" : "border-[#27272A] hover:border-zinc-500"
        )}
      >
        <input {...getInputProps()} />
        
        {/* Idle State: Waiting for file */}
        {status === "idle" && (
          <div className="space-y-4">
            <Upload className="w-10 h-10 mx-auto text-zinc-400" />
            <p>Drag & drop your PDF here or click to select</p>
          </div>
        )}

        {/* Uploading State: Showing progress */}
        {status === "uploading" && (
          <div className="space-y-4">
            <Loader2 className="w-10 h-10 mx-auto animate-spin text-indigo-500" />
            <Progress value={progress} />
            <p>Processing: {progress}%</p>
          </div>
        )}

        {/* Success State: File handled */}
        {status === "success" && (
          <div className="space-y-4">
            <CheckCircle2 className="w-12 h-12 mx-auto text-green-500" />
            <p className="font-medium text-green-500">File uploaded successfully!</p>
            <Button onClick={() => setStatus("idle")}>Upload another</Button>
          </div>
        )}

        {/* Error State: Handling validation errors */}
        {status === "error" && (
          <div className="space-y-4">
            <AlertCircle className="w-12 h-12 mx-auto text-red-500" />
            <p className="text-red-500">{error}</p>
            <Button variant="outline" onClick={() => setStatus("idle")}>Try again</Button>
          </div>
        )}
      </div>
    </div>
  );
}