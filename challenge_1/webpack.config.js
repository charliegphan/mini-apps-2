const path = require('path');

const SRC_PATH = path.join(__dirname, 'client', 'index.jsx');
const OUT_DIR = path.join(__dirname, 'public');

module.exports = {
  entry: SRC_PATH,
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          },
        },
      },
    ],
  },
};
