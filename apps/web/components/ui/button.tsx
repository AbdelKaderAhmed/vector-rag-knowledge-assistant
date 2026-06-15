import { cn } from "@/lib/utils";
import React from "react";

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(({ className, ...props }, ref) => (
  <button ref={ref} className={cn("px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors", className)} {...props} />
));
Button.displayName = "Button";