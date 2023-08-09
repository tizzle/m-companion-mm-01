/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        interaction: "#0064FE",
        darkBlue: "#002D72",
        mediumBlue: "#33578E",
        appBgBlue: "#F2F5F8",
        grey: "#8E8E93",
        "grey-tint-80": "#CCD0D6",
        "grey-tint-90": "#D8D8D8",
      },
      fontSize: {
        xxs: "10px",
        15: "15px",
        14: "14px",
        13: "13px",
      },
    },
  },
  plugins: [],
};
