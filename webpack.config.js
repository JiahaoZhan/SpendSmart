const path = require('path');

module.exports = (env) => {
  const isProduction = env == 'production';
  
  return {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        type: "asset/resource",
      },
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
      ],
    },
    ]
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'public'),
    historyApiFallback: true,
    
  }
}};
