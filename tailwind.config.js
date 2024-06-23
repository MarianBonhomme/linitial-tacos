/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      
    },
    extend: {
      colors: {

      },
      maxWidth: {
        'largeScreen': '2000px'
      }
    },
  },
  plugins: [],
}

