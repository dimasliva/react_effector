/** @type {import('tailwindcss').Config} */
module.exports = {
  base: '/react_effector/',
  root: './',
  build: {
    outDir: 'dist',
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}