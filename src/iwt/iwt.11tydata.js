const { DateTime } = require("luxon");

module.exports = {
  layout: "blog_post",
  page_class: "blog",
  tags: ["posts"],
  permalink:
    "iwt/{{ page.date | date: '%Y/%m/%d' }}/{{ title | slugify }}/index.html",
};
