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
        "from-body-bg-gradiant-l1": "rgba(0,0,0,0.35)",
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
        zomOutControlThumB: {
          "0%": {
            opacity: 1,
            height: "80px",
            width: "80px",
            transform: "scale(1)",
            // border: "1px solid rgba(255,255,255,0.4)",
          },
          "100%": {
            opacity: 0,
            height: "80px",
            width: "80px",
            transform: "scale(2)",
            // border: "1px solid rgba(255,255,255,0.4)",
          },
        },
      },
      animation: {
        zomOutControlThumB: "zomOutControlThumB 0.5s ease-in-out",
      },
    },
  },

  plugins: [],
}
