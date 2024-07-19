/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'first':  ["Unbounded", 'sans-serif'],
      'second-family': ["SF Pro Display", 'sans-serif']
    }
  },
  plugins: [],
}