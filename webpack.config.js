const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: {
      import: ['./src/scripts/main.ts', './src/styles/main.scss'],
    }
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/[name].min.js',
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.scss', '.webp', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // Extract SCSS to separate files
        exclude: /node_modules/,
      },
      {
        test: /\.(webp|svg|png|jpg|jpeg|gif)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css', // CSS files will be output to static/css
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'img' },
        { from: 'src/fonts', to: 'fonts' }
      ],
    }),
  ],
};