// NodeJS
const path = require('path');
const webpack = require('webpack');

// Webpack plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Helper Variables
const paths = {
  entryClient: path.resolve(__dirname, "src", "client", 'index.jsx'),
  src: path.resolve(__dirname, "src", "client", "index.html"),
  dest: path.resolve(__dirname, 'public'),
  destHtml: path.resolve(__dirname, 'public', 'index.html'),
  contentBase: path.join(__dirname, 'public'),
  img: path.resolve(__dirname, "src", "client", "assets", "img")
};

module.exports = {
  mode:'development',
  devtool: "source-map",
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    'react-hot-loader/patch',
    paths.entryClient,
  ],
  optimization:{
    splitChunks: {
      chunks:'all'
    }
  },
  output: {
    path: paths.dest,
    filename: "bundle.js",
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: {
            minimize: true
          }
        }]
      },
      {
        test: /\.(scss|css)$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/assets/[name].[ext]',
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: paths.src,
      filename: paths.destHtml
    })
  ],
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },
  devServer: {
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  }
};