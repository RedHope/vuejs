var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|css|scss)$/,
        loader: 'null-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: 'eval',
  plugins: [new VueLoaderPlugin()]
};
