const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.join(__dirname, 'src');

const DIST_DIR = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(__dirname, '/src/root.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'],
          plugins: ['babel-plugin-styled-components'],
        },
      },
      {
			test: /\.(css)$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}, {
				loader: 'sass-loader'
			}]
		},

    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
};












