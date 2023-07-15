const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  target: "web",
  devServer: {
    port: "3000",
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-env", "@babel/preset-react"],
        //   },
        // },
      },
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
};
