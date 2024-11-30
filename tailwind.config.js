/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { nunito: 'Nunito' },
    },
    colors: {
      gray: { 100: '#808080', 200: '#323232', 300: '#212121' },
      white: '#fff',
      cyan: '#14ffec',
      red: '#d6436e',
      green: '#23da72',
    },
  },
  plugins: [],
}

