const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const environment = process.env.ENVIRONMENT || 'dev';
const outputConfig = require('./webpack-config/output.' + environment + '.js');
const environmentPlugins = require('./webpack-config/plugins.' + environment + '.js');

module.exports = {
  entry: {
    app: ['bootstrap-loader', './src/main.js'],
    vendor: [
        'angular',
        'angular-ui-router',
        'bootstrap'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: ['ng-annotate-loader','babel-loader?presets[]=es2015']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader"
        })
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
       {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=102400'
      }, 
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, 
        loader: "file-loader" 
      }
    ]
  },
  resolve: {
    alias: {
      'common': __dirname + '/src/app/common'
    }
  },
  plugins: environmentPlugins,
  output: outputConfig
};
