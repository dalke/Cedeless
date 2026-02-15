import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it"

export default function(eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  };
  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/iwt/posts.json",
    collection: {
      name: "post", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Infinite, Worthless Time",
      description: "Notes from a temporary retirement",
      base: "https://cedeless.com/",
      author: {
        name: "Reuben Dalke",
      }
    }
  });
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/*.png");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("src/site.webmanifest");
  eleventyConfig.setLibrary("md", markdownIt(options));
};

export const config = {
  templateFormats: ["html", "liquid", "njk"],
  dir: {
    input: "src",
    output: "public"
  }
};
