import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          red: "#fe4a49",
          blue: "#99b2dd",
          purple: "#932f6d",
          yellow: "#fdca40",
        },
        // Driven by CSS variables so the dark-mode toggle can animate them.
        bg: "var(--background-color)",
        secondary: "var(--secondary-color)",
        opacityc: "var(--opacity-color)",
      },
      fontFamily: {
        mono: ['"Courier New"', "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
