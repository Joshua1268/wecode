/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './page.html',
  ],
  theme: {
    extend: {
      fontFamily :{ 
        avenir: ['Avenir', sans-serif], 
        roboto: ["Roboto", sans-serif], 
      } 
    },
  },
  plugins: [],
}
