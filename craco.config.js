// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require("tailwindcss"),
        require("postcss-focus-visible"),
        require("autoprefixer"),
      ],
    },
  },
};
