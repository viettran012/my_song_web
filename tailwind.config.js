/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        header: "64px",
        playcard: "72px",
      },
      colors: {
        "border-bottom-color": "#1d1d1d",
        "main-bg": "#030303",
        "from-body-bg-gradiant": "rgba(0,0,0,0.75)",
        "to-body-bg-gradiant": "#000000",
        purple: "#6626f9",
        turquoise: "#43bcff",
        blue: "#5865fc",
        blueL: "#3c92ff",
        whiteT1: "#ffffffB3",
        bdm: "#ffffff33",
        whv: "#ffffff1a",
        grayL: "#212121",
      },
      backgroundImage: {
        "body-bg": "url('assets/bg/body-bg.jpg')",
      },
      flex: {
        a2: "2",
        a3: "3",
      },
      keyframes: {
        playerImageTranslate: {
          "0%": { transform: "translate(200px, 0px)", height: 0, opacity: 0 },
          "20%": {
            transform: "translate(160px, 0px)",
            height: "20%",
            opacity: 0.1,
          },
          "40%": {
            transform: "translate(120px, 0px)",
            height: "40%",
            opacity: 0.2,
          },
          "60%": {
            transform: "translate(80px, 0px)",
            height: "60%",
            opacity: 0.3,
          },
          "80%": {
            transform: "translate(40px, 0px)",
            height: "80%",
            opacity: 0.4,
          },
          "100%": { transform: "translate(0)", height: "100%", opacity: 1 },
        },
      },
      animation: {
        playerImageTranslate: "playerImageTranslate 300ms ease-in-out",
      },
    },
    minWidth: {},
  },

  plugins: [],
}
