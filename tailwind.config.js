/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        yellow:"#FECC02",
        black:"#131313",
        gray:"#4E4E4E",
      },
      fontFamily:{
        bebas:['Bebas Neue', 'cursive'],
        montserrat:['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('./images/banner.jpg')",
      }
    },
  },
  plugins: [],
}
