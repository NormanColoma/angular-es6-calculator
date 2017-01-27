const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new webpack.optimize.CommonsChunkPlugin({ name: "vendor", minChunks: Infinity }),
  new ManifestPlugin(),
  new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: 'index.html',
    basePath: '/'
  }),
  new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })
]