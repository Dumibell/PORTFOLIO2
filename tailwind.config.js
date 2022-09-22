/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anton: ["Anton", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Gothic: ["Gothic A1", "sans-serif"]
       },
    },
  },
  plugins: [],
}
