/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-white': '#efebeb',
        'my-dark-blue': '#3430c4',
        'my-blue': '#3c8dac',
        'my-green': '#729b73',
        'my-grey': '#161617',
        'my-gold': '#ad8d3a',
      },
    },
  },
  plugins: [],
}
