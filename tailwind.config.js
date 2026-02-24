/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        math: ["math", "sans-serif"],
      },
      colors: {
        "regal-grey": "#6A7280",
      },
    },
    screens: {
      xxs: "360px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      ml: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};