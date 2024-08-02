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
        "lightBlue": "#F0F7FF"

      },
      fontSize: {
        "44": "44.24px",
        "620": "620px",
        "530": "530px",
        "928": "928px"

      },
      fontFamily: {
        arima: ['Arima Madurai', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
