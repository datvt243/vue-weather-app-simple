module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-weather-app-simple/" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vuejs - Weather App",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  }
};
