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
      fontSize: {
        sm: "0.8rem",
        "14": "14px",
        "16": "16px",
        "20": "20px",
        "25": "25px",
        "22": "22px",
        "28": "28px",
        "30": "30px",
        "35": "35px",
        "36": "36px",
        "40": "40px",
        "50": "50px",
      },
      fontWeight: {
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  plugins: [],
};
export default config;
