/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  darkMode: "selector",
  theme: {
    extend: {
      animation: {
        "r-to-l": "r-to-l 2s",
      },
      keyframes: {
        "r-to-l": {
          "0%": { right: "-300px", opacity: "0" },
          "100%": { right: "0px", opacity: "100" },
        },
      },
    },
    fontFamily: {
      "sans": ["'Josefin Sans'", "sans-serif"],
    },
    colors: {
      primary: "#4070FF",
      light: "#d4d4d8",
      lighter: "#fafafa",
      dark: "#52525b",
      darker: "#18181b",
    },
  },
  plugins: [],
}

