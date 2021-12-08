module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        light: "#EBFFD9",
        DEFAULT: "#3BAB36",
        dark: "#256320",
        bg: "#BFEA94",
      },
      gray: {
        light: "#F2F2F2",
        DEFAULT: "#9E9E9E",
        dark: "#525252",
      },
      black: "#060D00",
      white: "#FBFBFB",
    },
    boxShadow: {
      "primary-btn": " 0px 2px 20px rgba(59, 171, 54, 0.54)",
      "primary-btn-hover": "0px 4px 20px rgba(8, 92, 52, 0.25)",
      "secondary-btn": "0px 4px 20px rgba(8, 92, 52, 0.25)",
      none: "0px 0px 0px rgba(0, 0, 0, 0)",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active", "checked"],
      textColor: ["active", "checked"],
      borderColor: ["active", "checked", "focus-visible"],
      boxShadow: ["active", "checked"],
      ringColor: ["focus-visible"],
      ringOffsetColor: ["focus-visible"],
      ringOffsetWidth: ["focus-visible"],
      ringOpacity: ["focus-visible"],
      ringWidth: ["focus-visible"],
      borderRadius: ["focus-visible"],
    },
  },
  plugins: [],
};
