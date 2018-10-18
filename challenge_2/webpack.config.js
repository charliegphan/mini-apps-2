const path = require('path');

const SRC_PATH = path.join(__dirname, 'client', 'index.jsx');
const OUT_DIR = path.join(__dirname, 'public', 'dist');

module.exports = {
  entry: SRC_PATH,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}