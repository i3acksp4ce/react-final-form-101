/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    ringOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    backdropOpacity: false,
  },
  plugins: [require('daisyui')],
}
