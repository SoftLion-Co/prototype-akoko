import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
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
      gray: "#707070",
      "light-gray": "#F4F6F8"
    },
    screens: {
      mobile: { max: "767.98px" },
      tablet: { min: "768px" },
      laptop: { min: "1280px" },
      desktop: { min: "1600px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        tablet: "35px",
        laptop: "65px",
      },
    },
    fontWeight: {
      "100": "300",
      "200": "300",
      "300": "300",
      "400": "400",
      "500": "500",
      "600": "600",
      "700": "700",
      "800": "300",
      "900": "300",
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
        "18": "18px",
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
    },
    letterSpacing: {
      "0.662": "0.662px",
      "0.8": "0.8px",
      "0.965": "0.965px",
      "0.99": "0.99px",
      "1.1": "1.1px",
      "1.21": "1.21px",
      "1.375": "1.375px",
      "1.75": "1.75px",
      "1.925": "1.925px",
      "2": "2px",
      "2.2": "2.2px",
      "2.75": "2.75px",
    },
  },
  plugins: [],
};
export default config;
