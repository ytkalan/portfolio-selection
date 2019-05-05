const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pub = path.join(__dirname, '..', 'public');
const dist = path.join(__dirname, '..', 'build');

const common = {
  output: {
    filename: '[name].[hash].js',
    path: dist,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(pub, 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[hash].[ext]',
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js(x|)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env', {
                  shippedProposals: true,
                }],
              ],
              plugins: [
                'lodash',
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
              ],
            },
          },
        ],
      },
    ],
  }
};

module.exports = common;
