const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ['./src/exporter.js'],
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'exporter.js',
    library: 'libpack',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', 'css'],
  },

  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jsx$/,
        exclude: [/node_modules/, '/documents.jsx/', 'src/viewer/components/ViewerContainer/index.jsx'],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.IgnorePlugin(/documents/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new UglifyJsPlugin(),
  ],
};
