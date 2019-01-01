var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry :{
			index:"./src/gulpjs/index.min.js",			
			
	},
			
	output : {
		path : path.resolve(__dirname,'dist'),
		filename : 'main.js'
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : './src/html/index.html',
			filename:'index.html'}),
		new HtmlWebpackPlugin({
			template : './src/html/login.html',
			filename:'login.html'}),
		new HtmlWebpackPlugin({
			template : './src/html/registor.html',
			filename:'registor.html'}),
		new HtmlWebpackPlugin({
			template : './src/html/list.html',
			filename:'list.html'}),
		new HtmlWebpackPlugin({
			template : './src/html/details.html',
			filename:'details.html'}),
		new HtmlWebpackPlugin({
			template : './src/html/cart.html',
			filename:'cart.html'}),
	]
}