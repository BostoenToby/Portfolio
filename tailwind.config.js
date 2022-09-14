/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  darkMode: 'class',
  content: ['**/*.{tsx,html}'],
  theme: {
    screens: {
      'xxsm': '400px',
      'xsm': "450px",
      'sm': '640px',
      'xsmH': {'raw': '(min-height: 400px)'},
      'smH': {'raw': '(min-height: 720px), (max-width: 1024px)'},
      'md': '768px',
      'xmd': '900px',
      'lg': '1024px',
      'lgx': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
      'phoneSE': {'raw': '(min-height: 667px) and (min-width: 375px)'},
      'phoneSELand': {'raw': '(min-height: 375px) and (min-width: 667px)'},
      'phoneS20': {'raw': '(min-height: 915px) and (min-width: 412px)'},
      'phoneS20Land': {'raw': '(min-height: 412px) and (min-width: 915px)'},
      'ipadAir': {'raw': '(min-height: 1180px) and (min-width: 820px)'},
      'ipadAirLand': {'raw': '(min-height: 820px) and (min-width: 1180px)'},
      'ipadMini': {'raw': '(min-height: 1024px) and (min-width: 768px)'},
      'ipadMiniLand': {'raw': '(min-height: 768px) and (min-width: 1024px)'},
      'surface': {'raw': '(min-height: 1368px) and (min-width: 912px)'},
      'surfaceLand' : {'raw': '(min-height: 912px) and (min-width: 1368px)'},
      'surfaceDuo': {'raw': '(min-height: 720px) and (min-width: 540px)'},
      'surfaceDuoLand': {'raw': '(min-height: 540px) and (min-width: 720px)'},
      'next': {'raw': '(min-height: 600px) and (min-width: 1024px)'},
      'nextLand': {'raw': '(min-height: 1024px) and (min-width: 600px)'},
      'normal': {'raw': '(min-height: 1024px) and (min-width: 920px)'}
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
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
              scrollbarWidth: 'thin',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '2px',
              width: '2px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.blue.600'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.blue.200'),
          },
      });
  }),
  ],
}
