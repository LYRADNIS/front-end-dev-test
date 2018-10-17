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

    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
};







// module.exports = {
// 	entry: `${SRC_DIR}/app.jsx`,

//     // where our data goes

// 	watch: true,


// 	module: {
// 		rules: [
// 		{
// 		 test: /\.jsx$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['env', 'react'],
//           plugins: ['babel-plugin-styled-components'],
//         },
// 		},

//     {
//       test: /\.html$/,
//       loader: "raw-loader"
//     },

	 // {
		// test: /\.(css)$/,
		// 	use: [{
		// 		loader: 'style-loader'
		// 	}, {
		// 		loader: 'css-loader'
		// 	}, {
		// 		loader: 'sass-loader'
		// 	}]
		// },

// 			//third loader could go here
// 		]
// 	},
// 	output: {
// 		path: DIST_DIR,
// 		filename: 'bundle.js'
// 	},
// };






