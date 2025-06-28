/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Important for Vite/CRA index.html
    "./src/**/*.{js,jsx,ts,tsx}", // Looks in src for all JS/JSX/TS/TSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}