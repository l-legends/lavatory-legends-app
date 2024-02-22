/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#264653',
      'orange': '#CE6C47',
      'onyx': '#454545',
      'white': '#F5F5F5',
    },
    extend: {
      fontFamily: {
        league: ['"League"', 'sans-serif'  ],
        sanchez: ['"Sanchez"', 'sans-serif' ]
      }
    },
  },
  plugins: [],
}