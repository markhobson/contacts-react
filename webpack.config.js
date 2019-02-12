module.exports = {
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		publicPath: '/dist/'
	}
};
