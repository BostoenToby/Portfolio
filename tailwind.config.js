/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'white': '#FFFAFB',
        'lightgray': '#F9EFF1',
        'black': '#131515',
        'darkgray': '#2B2C28',
        'lightblue': '#7DE2D1',
        'green': '#339989'
      }
    },
  },
  plugins: [],
}
