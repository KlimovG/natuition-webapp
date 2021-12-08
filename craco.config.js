// craco.config.js
module.exports = {
  babel: {
    loaderOptions: {
      ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
    },
  },
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
