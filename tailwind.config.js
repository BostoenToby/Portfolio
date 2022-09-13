/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['**/*.{tsx,html}'],
  theme: {
    screens: {
      'xxsm': '400px',
      'xsm': "450px",
      'sm': '640px',
      'xsmH': {'raw': '(min-height: 400px)'},
      'smH': {'raw': '(min-height: 720px)'},
      'md': '768px',
      'xmd': '900px',
      'lg': '1024px',
      'lgx': '1100px',
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
        'darkgreen': '#1F7F70',
        'lightred': '#ED4337',
        'darkred': '#FF0033'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
