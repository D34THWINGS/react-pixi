const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  context: path.resolve(__dirname),
  mode: 'development',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[hash].chunk.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            cacheDirectory: true,
            cacheCompression: false,
          },
        },
        exclude: [/node_modules/, /react-pixi\/src/],
      }
    ]
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    hot: true,
    inline: true,
  },
};
