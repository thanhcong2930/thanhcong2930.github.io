const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
      margin: {
        18: '4.5rem',
        22: '5.5rem',
      },
      spacing: {
        110: '30rem'
      },
      borderWidth: {
        3: '3px'
      },
      skew: {
        '8': '8deg'
      },
      outline: {
        0: 0,
      },
      gradientColorStops: theme => ({
        'light-blue': {
          400: '#38bdf8'
        }
       })
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderWidth: ['hover', 'focus']
    }
  },
  plugins: []
}
