/** @type {DefaultColors} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'congresogold': '#d4a000',
        'congresogrisfuerte': '#5c5c5c',
        'congresgrissoft': '#e6e6e6',
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require("@tailwindcss/typography")],
}