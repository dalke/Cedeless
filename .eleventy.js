const yaml = require("js-yaml");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let options = {
    html: true,
    typographer: true,
  };
  eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.addFilter("smartquotes", (post) => {
    const hawaii = new RegExp(/(?<=<(h|l|p[^r]).*)Hawai'i/g);
    const slang = new RegExp(/'(cause|em|til|twas)/g);
    const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
    const years = new RegExp(/(?<=\s)'(?=\d)/g);
    const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)&quot;/g);
    const closeDoubles = new RegExp(/(?<=<(h|l|p[^r]).*“.*)&quot;(?=(\s|\p{P}|<))/gu);
    const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
    const closeSingles = new RegExp(/(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu);
    return post
      .replace(hawaii, "Hawaiʻi").replace(slang, "’$1")
      .replace(apostrophes, "’").replace(years, "’")
      .replace(openDoubles, "“").replace(closeDoubles, "”")
      .replace(openSingles, "‘").replace(closeSingles, "’");
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
