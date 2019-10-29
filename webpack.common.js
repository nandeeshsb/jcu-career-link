const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './src/js/vendor.js',
    signin: './src/js/signin.js',
    createaccount: './src/js/createaccount.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/signin.html',
      inject: true,
      chunks: ['vendor', 'signin'],
      filename: 'signin.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/createaccount.html',
      inject: true,
      chunks: ['vendor', 'createaccount'],
      filename: 'createaccount.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [require('autoprefixer')];
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name() {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return './img/[contentHash].[ext]';
          }
        }
      }
    ]
  }
};
