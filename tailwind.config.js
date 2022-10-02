/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...theme.fontFamily.sans],
        montserrat: ['"Montserrat"', ...theme.fontFamily.sans],
      },
      keyframes: {
        transformYellowCircle: {
          '0%%': { transform: 'translate(0%,0%)' },
          // '10%': { transform: 'translate(25%)' },
          '25%': { transform: 'translate(50%,-75%)' },

          // '30%': { transform: 'translate(75%)' },
          // '40%': { transform: 'translate(100%)' },
          '50%': { transform: 'translate(100%,-100%)' },
          // '60%': { transform: 'translate(75%)' },
          // '70%': { transform: 'translate(50%)' },
          // '80%': { transform: 'translate(25%)' },
          '100%': { transform: 'translate(0%,0%)' },
        },
        moveUp: {
          '0%%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(75px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        moveUp2: {
          '0%%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(35px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
