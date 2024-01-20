const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new BundleTracker({ filename: 'webpack-stats.json' }),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, "src", "index.html")
//     })
  ]
};
