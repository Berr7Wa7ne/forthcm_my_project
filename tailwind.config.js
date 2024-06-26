/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['Inter', 'Helvetica Neue', 'sans-serif'],
    },
    colors: {
      gradientStart: '#a8e063', 
      gradientEnd: '#56ab2f', 
      green: {
        600: '#2d6a4f', // Example color, adjust as necessary
      },
      gray: {
        600: '#4b5563', // Example color, adjust as necessary
      },
    },
  },
},
  plugins: [],
}
