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
        red: '#EE0000'
      },
      fontFamily: {
        'rs-reg': ['RS-Reg', 'sans-serif'],
        'rs-li': ['RS-Li', 'sans-serif'],
        'rs-med': ['RS-Med', 'sans-serif'],
        'rs-exli': ['RS-ExLi', 'sans-serif'],
        'ruda-reg': ['Ruda-Reg', 'sans-serif'],
        'ruda-med': ['Ruda-Med', 'sans-serif'],
        'ruda-sb': ['Ruda-SB', 'sans-serif'],
        'ruda-b': ['Ruda-B', 'sans-serif'],
        'ruda-exb': ['Ruda-ExB', 'sans-serif'],
      },
      // boxShadow: {
      //   'custom-sm': '0 2px 6px 0 rgba(0, 0, 0, 0.25)',
      //   'custom-md': '0 8px 6px 0 rgba(0, 0, 0, 0.25)',
      // },
    },
    fontSize: {
      'sm': '10px',
      'base': '12px',
      'md': '14px',
      'lg': '16px',
      'xl': '20px',
      'title': '32px'
    },
  },
  plugins: [],
}
