const baseConfig = require('./webpack.base.config');
const merge      = require('webpack-merge');
const path       = require('path');
const webpack    = require('webpack');

const devServerConfig = require('./user/dev.server');

const devConfig = {
  devServer : {
    contentBase        : path.join(__dirname, '..', 'dist'),
    compress           : true,
    port               : devServerConfig.port,
    historyApiFallback : true
  },
  plugins : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
};

module.exports = merge(baseConfig, devConfig);
