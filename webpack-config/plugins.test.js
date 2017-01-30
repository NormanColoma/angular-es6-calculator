const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: 'index.html',
    basePath: '/'
  }),
  new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })
];