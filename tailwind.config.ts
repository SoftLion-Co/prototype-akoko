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
      height: {
        'screen-150': 'calc(100vh - 150px)',
        'screen-111': 'calc(100vh - 111px)',
        'screen-85': 'calc(100vh - 85px)',
        'screen-45': 'calc(100vh - 45px)',
      },
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
    },
  },
  plugins: [],
};
export default config;
