const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  module: {
    loaders: [{
      "test": /\.vue$/,
      "loader": "vue-loader"
    }, {
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  }
};