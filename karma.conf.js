const webpackConfig = require("@vue/cli-service/webpack.config");
module.exports = function(config) {
  config.set({
    frameworks: ["mocha"],
    files: ["tests/**/*.spec.ts"],
    preprocessors: {
      "**/*.spec.ts": ["webpack", "sourcemap"]
    },
    autoWatch: true,
    webpack: webpackConfig,
    reporters: ["spec"],
    browsers: ["ChromeHeadless"]
  });
};
