const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './example/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './example/index',
  output: {
    path: path.resolve('example-build'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
        exclude: /node_modules/
      },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'], exclude: /node_modules/}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}