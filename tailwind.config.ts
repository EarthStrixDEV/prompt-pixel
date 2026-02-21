import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pixel: {
          pink: "#FFB3D9",
          "pink-dark": "#FF80BF",
          sky: "#B3E5FC",
          "sky-dark": "#81D4FA",
          mint: "#C8E6C9",
          "mint-dark": "#A5D6A7",
          yellow: "#FFF9C4",
          "yellow-dark": "#FFF176",
          lavender: "#E1BEE7",
          "lavender-dark": "#CE93D8",
          coral: "#FFAB91",
          dark: "#1a1a2e",
          "dark-mid": "#16213e",
          "dark-light": "#0f3460",
          white: "#fef6ff",
          // Theme-aware border color
          border: "var(--color-border)",
        },
        // Theme-aware semantic tokens
        theme: {
          bg: "var(--color-bg)",
          mid: "var(--color-bg-mid)",
          light: "var(--color-bg-light)",
          card: "var(--color-bg-card)",
          text: "var(--color-text)",
          "text-muted": "var(--color-text-muted)",
          "text-subtle": "var(--color-text-subtle)",
          "text-faint": "var(--color-text-faint)",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        body: ['"Noto Sans Thai"', "Inter", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-slow": "float 5s ease-in-out infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        "pixel-bounce": "pixelBounce 0.6s steps(4) infinite",
        blink: "blink 1s steps(2) infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        sparkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.8)" },
        },
        pixelBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px var(--shadow-color)",
        "pixel-sm": "2px 2px 0px 0px var(--shadow-color)",
        "pixel-lg": "6px 6px 0px 0px var(--shadow-color)",
        "pixel-pink": "4px 4px 0px 0px #FF80BF",
        "pixel-sky": "4px 4px 0px 0px #81D4FA",
        "pixel-mint": "4px 4px 0px 0px #A5D6A7",
        "pixel-lavender": "4px 4px 0px 0px #CE93D8",
        "glow-pink": "0 0 20px rgba(255,179,217,0.5)",
        "glow-sky": "0 0 20px rgba(179,229,252,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
