/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "onyx-black" : "#3c3c3c",
        "white" : "#F8F9FA",
        "logo-cream" : "#fff5e1",
        "powder-white" : "#FFFFFA",
        "accent-white" : "#fffbf0",
        "grey-light" : "#6C757D",
        "payne-grey" : "#476A6F",
        "carribean-blue": "#0D5C63",
        "light-green" : "#F2F7F2",
        "tiffany-blue" : "#78CDD7",
      },
      content: {
        gymtext: "url('./assets/truegym-text.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      fontFamily: {
        dmDisplay: ["DM Serif Display", "sans-serif"],
        dmText: ["DM Serif Text", "serif"],
        golos: ["Golos Text", "serif"]
      }, 
    },
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: []
};
