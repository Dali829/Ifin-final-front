/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal:{
                '50%':{transform : 'rotateY(180deg)'},
        },
      },
      animation: {
        hflip: 'flipHorizontal 15s infinite',
      }
    },
  },
  plugins: [],
}

