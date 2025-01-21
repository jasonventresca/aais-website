import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#074799",
        cosmic: "#001A6E",
        emerald: "#009990",
        lime: "#E1FFBB",
        //"body-color": "#009990",

      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
