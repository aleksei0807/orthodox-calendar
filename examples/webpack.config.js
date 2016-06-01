const webpack = require('webpack');

module.exports = {
    entry: {
        'index': "./src/index.js",
		'simple': "./src/simple.js",
		'complex': "./src/complex.js"
    },

	output: {
        path: './build',
        filename: "[name].js"
	},

	plugins: [
		new webpack.NoErrorsPlugin()
	],

	resolve: {
		moduleDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},

	resolveLoader: {
		moduleDirectories: ['node_modules'],
		moduleTemplates: ['*-loader', '*'],
		extensions: ['', '.js', '.jsx']
	},

	module: {
	  loaders: [
		  {
			  test: /\.jsx$/, loader: "react-hot-loader!babel-loader", exclude: [/node_modules/, /lib/]
		  },
		  {
			  test: /\.js$/, loader: "react-hot-loader!babel-loader", exclude: [/node_modules/, /lib/]
		  }
	  ]
	}
};
