module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#797979",
        gray_50_01: "#f9f9f9",
        gray_600_02: "#787878",
        gray_600_01: "#818181",
        blue_700: "#337ab7",
        black_900_3f: "#0000003f",
        gray_600_03: "#808080",
        gray_50: "#f8f8f8",
        gray_100: "#f5f5f5",
        indigo_300: "#5191cd",
        indigo_800_01: "#1e4190",
        white_A700: "#ffffff",
        indigo_800: "#1b3c8c",
      },
      fontFamily: { roboto: "Roboto", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(135deg ,#1b3c8c,#5191cd)",
        gradient1: "linear-gradient(135deg ,#1e4190,#5191cd)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
