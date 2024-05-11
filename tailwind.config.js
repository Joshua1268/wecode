/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './page.html',
  ],
  theme: {
    extend: {
      fontFamily :{ 
        avenir: ["avenir","sans-serif"], 
        roboto: ["roboto","sans"], 
      } 
    },
  },
  plugins: [],
}
