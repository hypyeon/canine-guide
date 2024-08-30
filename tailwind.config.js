/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}", 
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        black: '#1e212b',
        white: '#F8F7F4',
        sage: '#a9e5bb',
        sagetxt: '#0FAB85',
        yellow: '#f7b32b',
        yellowtxt: '#F2A202',
      },
    },
  },
  plugins: [],
}
