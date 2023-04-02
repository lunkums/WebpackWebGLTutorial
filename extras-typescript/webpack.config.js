const path = require('path');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/, // regex to match files with the .ts extension
        loader: 'ts-loader'
      },
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
  resolve: {
    extensions: ['.ts', '.js']
  }
};