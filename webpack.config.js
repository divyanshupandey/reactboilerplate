const path =require('path');
var config = {
	entry: path.resolve(__dirname, 'webclient', 'views', 'main.js'),
    output: {
        path: path.resolve(__dirname, 'webclient'),
		filename: 'bundle.js',
    	publicPath:'/webclient/'
	},
	module:{
		loaders: [
		{
			loader: 'babel-loader',
			test: /\.jsx?$/,
			exclude: /node_modules/,
			query: {
				presets: ['es2015', 'react', 'stage-1']
			}
		}]
	}
}

module.exports = config;