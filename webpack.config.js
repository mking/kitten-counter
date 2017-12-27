const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "babel-polyfill",
    "webpack/hot/only-dev-server",
    path.resolve(__dirname, "src/entrypoint")
  ],
  output: {
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: { babelrc: false }
          },
          { loader: "awesome-typescript-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  devtool: "eval",
  devServer: {
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
