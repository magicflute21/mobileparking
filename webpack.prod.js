const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyFiles = require('copy-webpack-plugin');
const title = 'Mobile Parking Solution';


module.exports = merge(common, {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js'
    },
    plugins: [
      new CopyFiles({
        patterns: [
          {from: './src/img', to: 'img'}
        ],
      }),
      new HtmlWebpackPlugin({
          title: title,
          template: "src/views/index.html",
          filename: "html/index.html"
      }),
      new HtmlWebpackPlugin({
          title: title,
          template: "src/views/second.html",
          filename: "html/second.html"
          }),
      new HtmlWebpackPlugin({
          title: title,
          template: "./src/views/third.html",
          filename: "./html/third.html"
          }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/fourth.html",
        filename: "./html/fourth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/fifth.html",
        filename: "./html/fifth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/sixth.html",
        filename: "./html/sixth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/seventh.html",
        filename: "./html/seventh.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/eighth.html",
        filename: "./html/eighth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/ninth.html",
        filename: "./html/ninth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/tenth.html",
        filename: "./html/tenth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/eleventh.html",
        filename: "./html/eleventh.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/twelfth.html",
        filename: "./html/twelfth.html"
      }),
      new HtmlWebpackPlugin({
        title: title,
        template: "./src/views/thirteenth.html",
        filename: "./html/thirteenth.html"
      }),
],
});
