var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ManifestPlugin = require('webpack-manifest-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = [
  new ExtractTextPlugin("styles.css"),
  new webpack.optimize.CommonsChunkPlugin({ name: "vendor", minChunks: Infinity }),
  new WebpackMd5Hash(),
  new ManifestPlugin(),
  new ChunkManifestPlugin({
    filename: "chunk-manifest.json",
    manifestVariable: "webpackManifest"
  }),
  new HtmlWebpackPlugin({
    template: './index.ejs',
    filename: 'index.html',
    basePath: '/'
  }),
  new webpack.optimize.UglifyJsPlugin({ exclude: [/node_modules\//], compress: { warnings: false, } }),
  new webpack.ProvidePlugin({
   $: "jquery",
   jQuery: "jquery"
  })
]