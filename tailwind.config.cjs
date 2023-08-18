/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'onyx-black': '#3c3c3c',
        'white': '#F8F9FA',
        'logo-cream': '#fff5e1',
        'powder-white': '#FFFFFA',
        'accent-white': '#fffbf0',
        'grey-light': '#6C757D',
        'payne-grey': '#476A6F',
        'carribean-blue': '#0D5C63',
        'light-green': '#F2F7F2',
        'tiffany-blue': '#78CDD7',
        'neutral': '#737373',
      },
      content: {
        gymtext: "url('./assets/truegym-text.png')",
      },
      fontFamily: {
        dmDisplay: ['DM Serif Display', 'sans-serif'],
        dmText: ['DM Serif Text', 'serif'],
        golos: ['Golos Text', 'serif'],
      },
      dropShadow: {
        'sm': '0 0 1px rgba(59, 60, 54, 0.45)',
      },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce': 'animation: bounce 1s infinite',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
    plugins: [],
  },
};
