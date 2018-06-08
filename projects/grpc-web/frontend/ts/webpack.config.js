const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [".js"]
  }
};
