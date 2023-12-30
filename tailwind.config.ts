import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#ffffff",
      black: "#000",
      "gray-dark": "#0000006e",
      "primary-footer": "#3a3a3a",
      red: "#ff0000",
      "red-dark": "#af0000",
      yellow: "#d89e08",
      blue: "#5b749a",
    },
    screens: {
      tablet: { min: "768px" },
      laptop: { min: "1280px" },
      desktop: { min: "1600px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "17px",
        tablet: "15px",
        laptop: "100px",
      },
    },
    extend: {
      borderRadius: {
        small: "5px",
        light: "23px",
        medium: "36px",
        large: "50px",
      },
      fontSize: {
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
