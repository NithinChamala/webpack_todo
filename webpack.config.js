
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  // entry: //...,
  // output: //...,

  module: {
    rules: [

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'], // 'eslint-loader'
        enforce: 'pre',
      },
      {
        test: /\.js$/, // (jsx for react modules like /\.(js | jsx)$/
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    ],


  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new MinifyPlugin({
    //   test: {},
    // }, {
    //   test: /\.js($|\?)/i,
    // }),
  ],
};
