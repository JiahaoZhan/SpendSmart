const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/i,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
        'postcss-loader'
      ]
    },]
  },
  devtool: 'eval',
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
  }
};
