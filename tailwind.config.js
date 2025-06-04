/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundColor: {
        'dark': '#1F242B',
      },

    },

  },
  plugins: [],
}