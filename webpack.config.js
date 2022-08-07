const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    alias: {
      three: path.resolve("./node_modules/three"),
      scenes: path.resolve(__dirname, "./src/scenes"),
      assets: path.resolve(__dirname, "./src/assets"),
      managers: path.resolve(__dirname, "./src/managers"),
      objects: path.resolve(__dirname, "./src/objects"),
      game: path.resolve(__dirname, "./src/game")
    },
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: [
          /node_modules/,
          /assets/,
        ],
      },
      {
        test: /\.glb$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static", to: "" }],
    }),
  ],
};
