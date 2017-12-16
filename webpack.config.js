const path = require('path');

module.exports = {
  entry: './src/source.js',
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