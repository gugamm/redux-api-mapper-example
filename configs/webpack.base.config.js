const webpack           = require('webpack');
const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlConfig        = require('./user/html');
const vendors           = require('./user/vendors');

const config = {
  entry : {
    bundle : './src/index.js',
    vendor : vendors
  },
  output : {
    path : path.join(__dirname, '..', 'dist'),
    filename : '[name].[chunkhash].js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        exclude : [/node_modules/],
        use : 'babel-loader'
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : htmlConfig.title,
      filename : htmlConfig.filename,
      template : './src/template.ejs'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    })
  ]
};

module.exports = config;
