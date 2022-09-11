/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['**/*.{tsx,html}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        'white': '#FFFAFB',
        'lightgray': '#F9EFF1',
        'lightgrayx': '#ECE5E7',
        'black': '#131515',
        'darkgray': '#2B2C28',
        'darkgrayx': '#454642',
        'lightblue': '#7DE2D1',
        'green': '#339989',
        'lightred': '#ED4337',
        'darkred': '#FF0033'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
