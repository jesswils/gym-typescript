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
        "text-grey" : "#5E6472",
        "text-grey-light" : "#6C757D",
        "text-white" : "#F8F9FA",
        "grey-blue": "#FCFFFC",
        "grey-green" : "#F2F7F2",
        "green" : "#B3DEC1"
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
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: []
};
