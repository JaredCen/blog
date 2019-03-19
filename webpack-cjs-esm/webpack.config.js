const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    cjs: './cjs/app.js',
    esm: './esm/app.js',
  },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname),
  },
  optimization: {
    minimize: false,
    concatenateModules: false,
  },
};