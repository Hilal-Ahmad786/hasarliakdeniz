import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional insurer vibe
        primary: {
          navy: "#1e3a8a",   // deep navy
          blue: "#3b82f6",   // professional blue
        },
        accent: {
          orange: "#ea580c", // warm CTA accent
        },
        trust: {
          green: "#059669",  // positive actions
        },
      },
      boxShadow: {
        card: "0 8px 24px rgba(2, 6, 23, .08)",
      },
    },
  },
  plugins: [],
};
export default config;
