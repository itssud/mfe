module.exports = {
  module: {
    rules: [
      // define loaders here, goal of a loader is to tell webpack to process some different files as we start to import them into our project.
      // #1 loader -> babel loader
      {
        test: /\.m?js$/, // *.mjs and *.js files are processed by babel
        exclude: /node_modules/, // dir specified here are not processed by babel
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // preset-react means that babel is gonna process all different jsx tags,
            // preset-env is gonna convert all kind of EES2015, 16, 17 and so on syntax to ES5
            plugins: ["@babel/plugin-transform-runtime"],
            // plugin-transform-runtime enables features like async, await syntax
          },
        },
      },
    ],
  },
};
