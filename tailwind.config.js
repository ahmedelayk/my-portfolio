/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#00C0FD",
        dark: "#42446E",
        gradientR: "#E70FAA",
        paragraph: "#666666",
      },
      fontFamily: {
        // poppins: "sans",
      }
    },
  },
  plugins: [],
}

