const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/,
        use: ["file-loader"]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', 
      favicon: "./public/favicon.ico",
      filename: "index.html",
      manifest: "./public/manifest.json"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ] 
};