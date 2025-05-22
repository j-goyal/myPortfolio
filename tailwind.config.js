/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        math: ['math', 'sans-serif'],
      },
      colors: {
        'regal-grey': '#6A7280',
      }
    },
  },
  plugins: [],
}