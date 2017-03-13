const baseConfig = require('./webpack.base.config');
const merge      = require('webpack-merge');
const webpack    = require('webpack');

const prodConfig = {
  plugins : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle   : false,
      comments : false
    })
  ]
};

module.exports = merge(baseConfig, prodConfig);
