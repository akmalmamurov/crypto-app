/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bodyColor: "#151E27",
        mainColor: "#1D2733",
        silver: "#8F8F8F",
        salute: "#2D343C",
      },
    },
  },

  plugins: [],
});
