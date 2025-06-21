const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.ts',
  output: {
    path: path.resolve(__dirname, 'static', 'js'),
    publicPath: '/static/js/',
    clean: true,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.ts', '.tsx']
  },
};