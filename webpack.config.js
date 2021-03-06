const path = require("path"); //allows us to use __dirname to getg absolute path

module.exports = {
  entry: "./src/app.js", //relative path
  output: {
    path: path.join(__dirname, "public"), //uses absolute path
    filename: "bundle.js" //can be named anything
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/, //tells babel to look of files ending in .js
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, //tells webpack to look for changes to scss files. The question mark allows webpack to look for scss and css files. The s is optional
      use: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]
    }]
  },
  devtool: "cheap-module-eval-source-map", //shows where errors occur in dev tools. What file as opposed to the final output bundle.
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};

