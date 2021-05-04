const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: "#00E0F3",
          500: "#00c4fd",
        },
        dark: "#333333",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
