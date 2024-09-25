const path = require("path");

module.exports = {
  mode: "development", // or 'production' if you're building for production
  entry: "./src/index.js", // your entry point file
  output: {
    filename: "bundle.js", // output bundle file name
    path: path.resolve(__dirname, "dist"), // output directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // This will match .js and .jsx files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: "babel-loader", // Use Babel loader for transpiling
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Include these presets
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolve these extensions
    fallback: {
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      assert: require.resolve("assert/"),
    },
  },
  devtool: "source-map", // Optional: for easier debugging
};
