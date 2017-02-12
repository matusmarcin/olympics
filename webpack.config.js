module.exports = {
	entry: './src/index.js',
	output: {
		path: './dist/',
		filename: 'app.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
}