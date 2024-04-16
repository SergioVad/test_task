const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: 'build.js',
    path: path.resolve('build'),
    clean: true,
    publicPath: '/',
  },
  devServer: {
    port: 8000,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
        overlay: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html')
  }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }
};