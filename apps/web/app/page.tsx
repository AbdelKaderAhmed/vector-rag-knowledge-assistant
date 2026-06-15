"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Database, FileText, MessageSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
          Transform Documents Into <br />
          <span className="text-primary">Searchable Intelligence</span>
        </h1>
        <p className="relative text-xl text-muted-foreground mb-10 max-w-2xl">
          Upload your technical PDFs, manuals, or research papers. Retrieve precise answers and chat with your data in seconds.
        </p>
        <div className="relative flex gap-4">
          <Link href="/upload">
            <Button size="lg" className="rounded-full px-8 text-lg">
              Upload Documents <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/chat">
            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg">
              Try Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FileText, title: "Rapid Ingestion", desc: "Support for PDF, TXT, and Markdown files with sub-second processing." },
            { icon: Database, title: "Semantic Retrieval", desc: "State-of-the-art vector search that understands context, not just keywords." },
            { icon: MessageSquare, title: "Contextual AI Chat", desc: "Get citations and direct answers from your specific documentation." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <feature.icon className="w-10 h-10 mb-6 text-primary" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">The Intelligence Pipeline</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              { label: "Upload", icon: FileText },
              { label: "Process", icon: Brain },
              { label: "Retrieve", icon: Database },
              { label: "Chat", icon: MessageSquare }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="font-semibold text-lg">{step.label}</span>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Ready to unlock your knowledge base?</h2>
        <Link href="/upload">
          <Button size="lg" className="rounded-full px-12 text-xl py-6">Get Started Now</Button>
        </Link>
      </section>
    </div>
  );
}