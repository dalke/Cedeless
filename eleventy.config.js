import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "json", // or "rss", "json"
    outputPath: "/iwt/feed.json",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Infinite, Worthless Time",
      subtitle: "Notes from a temporary retirement",
      base: "https://cedeless.com/",
      author: {
        name: "Reuben Dalke",
        email: "", // Optional
      }
    }
  });
};

export const config = {
  templateFormats: ["html", "liquid", "njk"],
  dir: {
    input: "src",
    output: "public"
  }
};
