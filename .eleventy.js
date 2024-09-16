const sass = require("sass");

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass");
  eleventyConfig.addPassthroughCopy("./src/css");
  
  
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
      output: "public"
    }
  };
};