import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        
    "./components/**/*.{js,ts,jsx,tsx,mdx}", 
    "./providers/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      colors: {
        
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        muted: "var(--muted)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], 
};

export default config;