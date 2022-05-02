const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: "./src",
  mode: "development",
  devtool: "source-map",
  optimization: {
    minimize: false,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [require.resolve("react-refresh/babel")],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        type: "asset",
      },
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin({
      exclude: [/node_modules/, /bootstrap\.(js|ts)$/],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/icon.png",
      chunks: ["main"],
    }),
  ],
};
