import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          mobile: "20px",
          tablet: "15px",
          laptop: "100px",
          desktop: "100px",
        },
      },
      screens: {
        mobile: { max: "767.98px" },
        tablet: { min: "768px" },
        laptop: { min: "1280px" },
        desktop: { min: "1600px" },
      },
      colors: {
        white: "#FFFFFF",
        black: "#000",
        "gray-dark": "#0000006E",
        "reg-light": "#AF0000",
        red: "#FF0000",
        yellow: "#D89E08",
        "blue-light": "5B749A",
        "gray-footer": "#3A3A3A",
      },
    },
  },
  plugins: [],
};
export default config;
