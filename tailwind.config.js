/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'pink',
          100: 'blue',
        },
        secondary: {
          50: 'pink',
          100: 'blue',
        },
        fontFamily: {},
      },
    },
  },
  plugins: [],
}
