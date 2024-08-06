/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      onest: ['Onest', 'Ubuntu', 'sans-serif', 'serif'],
      // sans: ['Ubuntu', 'sans-serif'],
      // serif: ['Ubuntu', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

