/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "border-bottom-color": "#1d1d1d",
        "main-bg": "#030303",
        "from-body-bg-gradiant": "rgba(0,0,0,0.75)",
        "to-body-bg-gradiant": "#000000",
        purple: "#6626f9",
        turquoise: "#43bcff",
        blue: "#5865fc",
        blueL: "#3c92ff",
      },
      backgroundImage: {
        "body-bg": "url('assets/bg/body-bg.jpg')",
      },
    },
  },
  plugins: [],
}