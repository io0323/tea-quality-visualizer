/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: '#a7f3d0',
        deepgreen: '#16a34a',
        gold: '#fde68a',
        washi: '#fef08a',
        fuji: '#a78bfa',
        lightfuji: '#c4b5fd',
        brown: '#a16207',
        lightbrown: '#fef3c7',
      },
    },
  },
  plugins: [],
}