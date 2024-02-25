import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

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
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.warmGray,
      sky: colors.lightBlue,
      neutral: colors.trueGray,
      gray: colors.coolGray,
      slate: colors.blueGray,
      grey: {
        DEFAULT: "#5A5A5A",
        light: "#999",
        lighter: "#ddd"
      },
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
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ]
};

export default config;
