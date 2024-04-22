import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'base1': '#002147',
        'base2': '#003073',
        'base3': '#FFFFFF',
        'base4': '#F7F7F7',
        'base5': '#e5e8ec',
        'base6': '#DDDDDD',
        'base7': '#5bb53a',
        'base8': '#9C0734',
      },
      fontFamily: {
        TT: "TT"
      }
    },
  },
  plugins: [],
};
export default config;
