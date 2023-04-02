const path = require('path');

module.exports = {
  entry: './src/main.js',
  devServer: {
    open: true,
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.glsl$/, // regex to match files with the .glsl extension
        loader: 'webpack-glsl-loader'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};