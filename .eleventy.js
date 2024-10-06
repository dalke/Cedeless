const sass = require("sass");
const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");

  // eleventyConfig.addTemplateFormats("scss");
  // eleventyConfig.addExtension("scss", {
  //   outputFileExtension: "css",
  //
  //   compile: async function (inputContent, inputPath) {
  //     // Run file content through Sass
  //     let result = sass.compileString(inputContent, {
  //       sourceMap: true,
  //     });
  //
  //     // Allow included files from @use or @import to
  //     // trigger rebuilds when using --incremental
  //     this.addDependencies(inputPath, result.loadedUrls);
  //
  //     return async () => {
  //       return result.css;
  //     };
  //   },
  // });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
