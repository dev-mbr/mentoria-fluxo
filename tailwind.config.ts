import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(73.21% 54.9% at 50% 0%, rgba(245, 255, 0, 0.18) 0%, rgba(245, 255, 0, 0.00) 100%), #000',
        'gradient-indicados': 'radial-gradient(77.91% 58.42% at 50% 100%, rgba(245, 255, 0, 0.18) 0%, rgba(245, 255, 0, 0.00) 100%), #000',
      },
      screens: {
        'sm': {'min': '300px', 'max': '1024px'},
        'mm': {'min': '1025px', 'max': '1564px'},
        'lg': '1025px'
      },
      boxShadow: {
        'x1': '0px 4px 48px 0px rgba(0, 0, 0, 0.04)',
        'btn': '0px 4px 48px 0px rgba(180, 185, 51, 0.24)',
        'x2': '0px 4px 48px 0px rgba(0, 0, 0, 0.04)',
        'x3': '0px 0px 96px 24px rgba(0, 0, 0, 0.64)',
      },
    },
  },
  plugins: [],
};
export default config;
