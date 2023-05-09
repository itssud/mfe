// Importing the necessary modules
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// Creating a development configuration object
const devConfig = {
  mode: "development",
  devServer: {
    // Setting the port number for the development server
    port: 8080,
    // Configuring the fallback URL to serve the index page
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
    // Creating a new instance of HtmlWebpackPlugin to generate the index.html file
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

// Merging the common configuration and the development configuration into a single configuration object
module.exports = merge(commonConfig, devConfig);
