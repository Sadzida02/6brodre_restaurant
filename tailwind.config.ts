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
        "lightBlue": "#F0F7FF",
        "lightGray": "#969696",
        "teal": "#408EBA",
      },
      fontSize: {
        "44": "44.24px",
        "620": "620px",
        "530": "530px",
        "928": "928px",
        "13": "13px",
        "10": "10px",
        "8": "8px",
        
      },
      width: {
        "50": "50px",
        "70": "70px"
      },
      fontFamily: {
        arima: ['Arima Madurai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
