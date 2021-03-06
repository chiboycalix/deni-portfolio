/** @format */

const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    screens: {
      xxxs: '375px',
      // => @media (min-width: 375px) { ... }

      xxs: '414px',
      // => @media (min-width: 414px) { ... }

      xs: '540px',
      // => @media (min-width: 540px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      heroBgColors: {
        lugah: '#FEE7CC',
        agentSearch: '#E4E7F1',
        agentProductivity: '#E2EEF7',
        esquity: '#F7E9E5',
      },
      projectGoalBgColors: {
        lugah: '#5E3200',
      },
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
