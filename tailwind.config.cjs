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
        "bg-white" : "#F5F5F5",
        "grey" : "#5E6472",
        "grey-light" : "#6C757D",
        "white" : "#F8F9FA",
        "grey-blue": "#FCFFFC",
        "grey-green" : "#F2F7F2",
        "blue-green" : "#B3DEC1",
      },
      backgroundImage: {
        "desktop-home": "url('/bg.jpg')"
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
