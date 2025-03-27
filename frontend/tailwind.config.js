import plugin from "tailwindcss";
import daisyui from "daisyui";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{css}"],
  theme: {
    extend: {
      fontFamily: {
        eduArrows: ["'Edu AU VIC WA NT Arrows'", "sans-serif"],
        fira: ["'Fira Code'", "monospace"],
        inconsolata: ["'Inconsolata'", "monospace"],
        monofett: ["'Monofett'", "cursive"],
        montserrat: ["'Montserrat'", "sans-serif"],
        parkinsans: ["'Parkinsans'", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        cyberpunk: {
          "base-100": "oklch(94.51% 0.179 104.32)",
          "base-200": "oklch(91.51% 0.179 104.32)",
          "base-300": "oklch(85.51% 0.179 104.32)",
          "base-content": "oklch(0% 0 0)",
          primary: "oklch(74.22% 0.209 6.35)",
          "primary-content": "oklch(14.844% 0.041 6.35)",
          secondary: "oklch(83.33% 0.184 204.72)",
          "secondary-content": "oklch(16.666% 0.036 204.72)",
          accent: "oklch(71.86% 0.217 310.43)",
          "accent-content": "oklch(14.372% 0.043 310.43)",
          neutral: "oklch(23.04% 0.065 269.31)",
          "neutral-content": "oklch(94.51% 0.179 104.32)",
          info: "oklch(72.06% 0.191 231.6)",
          "info-content": "oklch(0% 0 0)",
          success: "oklch(64.8% 0.15 160)",
          "success-content": "oklch(0% 0 0)",
          warning: "oklch(84.71% 0.199 83.87)",
          "warning-content": "oklch(0% 0 0)",
          error: "oklch(71.76% 0.221 22.18)",
          "error-content": "oklch(0% 0 0)",
          "--radius-selector": "0rem",
          "--radius-field": "0rem",
          "--radius-box": "0rem",
          "--size-selector": "0.25rem",
          "--size-field": "0.25rem",
          "--border": "1px",
          "--depth": "0",
          "--noise": "0",
        },
      },
    ],
  },
};
