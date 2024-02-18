/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: '#00171f',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        200: '#f1dac4',
        300: '#eae2b7',
        400: '#eaac8b',
        800: '#1f2937',
        900: '#1a202c',
      },
      blue:{
        900 : '#03045e',
        800 : '#00509d',
        700 : '#0077b6',
        500 : '#00b4d8',
        300 : '#90e0ef',
        100 : '#caf0f8',
      }
    }
  },
  plugins: [],
}