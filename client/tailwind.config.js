/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'congresogold': '#d4a000',
        'congresogrisfuerte': '#5c5c5c',
        'congresgrissoft': '#e6e6e6'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require("@tailwindcss/typography")],
}