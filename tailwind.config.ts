import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#BB2649",
      black: "#181818",
      white: "#fff"
    },
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'medium': '500',
        'bold': '700',
      },
      fontStyle: {
        'light-italic': 'italic',
        'regular-italic': 'italic',
        'medium-italic': 'italic',
        'bold-italic': 'italic',
      },
    },
  },
  plugins: [],
};

export default config;
