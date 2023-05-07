/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#fff",
      },
      fontFamily: {
        libre: ["Abhaya Libre", "sans-serif"],
      },
      animation: {
        underline: "underline 1s ease-in-out forwards",
      },
      keyframes: {
        underline: {
          "0%": {
            "outline-bottom": "none",
          },
          "100%": {
            "outline-bottom": "1px solid #000",
          },
        },
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
