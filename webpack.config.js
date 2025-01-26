const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js', // Main entry point
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the dist folder before each build
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i, // Handle CSS files
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Source HTML file
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css', // Extracted CSS file name
    }),
  ],
};
