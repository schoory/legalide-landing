const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].[hash].js',
    clean: true,
  },
  devServer: {
    open: 'http://localhost:9000',
    port: 9000,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './assets/styles/[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'blocking'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: 'assets/images/[hash][ext]'
        }
      },
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },
}