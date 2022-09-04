/** @type {import('tailwindcss').Config} */
// @ts-ignore
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      gray: {
        50: '#eeeeee',
        100: '#dcdcdc',
        200: '#bababa',
        300: '#999999',
        400: '#777777',
        500: '#555555',
        600: '#444444',
        700: '#333333',
        800: '#222222',
        900: '#111111'
      },
      blue: {
        50: '#edf1f9',
        100: '#dae3f3',
        200: '#b5c7e7',
        300: '#8fabdb',
        400: '#6a8ed0',
        500: '#4472c4',
        600: '#365b9d',
        700: '#294476',
        800: '#1c2e4f',
        900: '#0e1727'
      }
    },
    dropShadow: {
      DEFAULT: '3px 3px 1px #0e1727',
      lg: '5px 5px 3px #1c2e4f'
    },
    screens: {
      xs: '351px',
      ...defaultTheme.screens
    },
    extend: {
      boxShadow: {
        'box': '3px 3px 1px #0e1727',
        'box-lg': '5px 5px 3px #1c2e4f'
      }
    },
  },
  plugins: [],
}
