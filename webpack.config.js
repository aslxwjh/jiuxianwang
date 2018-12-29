var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry :{
			index:"./module/js/index.js",
			login:"./module/js/login.js",
			register:'./module/js/register.js',
			list:'./module/js/register.js',
			details:'./module/js/details.js',
			cart:'./module/js/cart.js',			
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
			template : './src/html/register.html',
			filename:'register.html'}),
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