"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Upload, FileText, Database, 
  MessageSquare, BarChart3, Settings, ChevronLeft, 
  HardDrive, ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const navGroups = [
  {
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Upload", href: "/upload", icon: Upload },
      { name: "Documents", href: "/documents", icon: FileText },
      { name: "Knowledge Base",href: "/knowledge-base", icon: Database },
    ]
  },
  {
    items: [
      { name: "Chat", href: "/chat", icon: MessageSquare },
      { name: "Evaluation", href: "/evaluation", icon: BarChart3 },
    ]
  },
  {
    items: [
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside className={cn(
      "group relative flex flex-col border-r bg-[#09090B] transition-all duration-300 ease-in-out",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute -right-3 top-6 z-10 h-6 w-6 rounded-full border bg-background shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
      </Button>

      <div className="flex h-16 items-center px-4 font-bold text-white tracking-tight">
        {!isCollapsed && "VectorRAG"}
      </div>

      <div className="flex-1 space-y-8 py-4 px-2">
        {navGroups.map((group, idx) => (
          <nav key={idx} className="space-y-1">
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all",
                    isActive ? "bg-[#27272A] text-white" : "text-zinc-400 hover:bg-[#18181B] hover:text-white"
                  )}
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        ))}
      </div>

      {!isCollapsed && (
        <div className="p-4 border-t border-[#27272A] m-2 rounded-xl bg-[#18181B]">
          <div className="flex items-center gap-2 mb-3 text-xs text-zinc-400">
            <HardDrive className="h-4 w-4" />
            <span>Storage Usage</span>
          </div>
          <Progress value={75} className="h-1.5 mb-3" />
          <div className="text-[10px] text-zinc-500 space-y-1">
            <p>1,240 documents</p>
            <p>45k total chunks</p>
          </div>
        </div>
      )}
    </aside>
  );
}