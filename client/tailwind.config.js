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
        'congresoGrisFuerte': "#646567",
        'doradoclaro': "#F5E29B",
        "doradooscuro": "#D1B06D",
        'congresogrisfuerte': '#cfcfcf',
        'congresgrissoft': '#e6e6e6',
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,

      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require("@tailwindcss/typography")],
}