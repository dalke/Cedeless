const { DateTime } = require("luxon");

module.exports = {
  layout: "blog_post.liquid",
  page_class: "blog",
  tags: ["posts"],
  eleventyComputed: {
    dateEt: ({ page }) =>
      DateTime.fromJSDate(page.date, { zone: "utc" }).setZone(
        "America/New_York",
        { keepLocalTime: true }
      ),
  },
  permalink: "iwt/{{ title | slugify }}/index.html",
};
