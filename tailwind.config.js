/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.html", "./src/**/*.js" ],
  theme: {
    extend: {
      colors: {
        'lemon': 'hsl(47, 88%, 63%)',
        'grey500':  'hsl(0, 0%, 42%)',
        'grey950': 'hsl(0, 0%, 7%)'
      },
      // import font family figtree from assets/fonts folder
      fontFamily: {
        'Figtree': ['Figtree', 'sans-serif']
      },  

    },
  },
  plugins: [],
}

