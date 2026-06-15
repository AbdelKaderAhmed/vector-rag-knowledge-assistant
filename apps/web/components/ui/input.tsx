import { cn } from "@/lib/utils";
import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn("w-full rounded-md border border-input p-2 outline-none focus:ring-2", className)} {...props} />
));
Input.displayName = "Input";