const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // false or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '361px',
        ...defaultTheme.screens,
      },
      backgroundImage: theme => ({
        'principal': "url('/img/bg-gradient.svg')",
      }),
      colors: {
        "textbase": "#8e8fd2",
        "textdark": "#6a6ba0",
      },
      animation: {
        floatFast: "float 4s ease-in-out infinite",
        floatSlow: "float 8s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            boxShadow: "0 5px 15px 0px rgba(0,0,0,0.4)",
            transform: "translatey(0px)",
          },
          "50%": {
            boxShadow: "0 15px 15px 0px rgba(0,0,0,0.2)",
            transform: " translatey(-10px)",
          },
          "100% ": {
            boxShadow: " 0 5px 15px 0px rgba(0,0,0,0.4)",
            transform: " translatey(0px)",
          }
        },
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
