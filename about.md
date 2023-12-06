---
title: About Cedeless
layout: about
permalink: /about/
---

Cedeless is the personal project site of Reuben Dalke. That's me. Hi.

This isn't a [résumé site](https://resume.reubendalke.com), but it exists in public largely to demonstrate my ability to build web pages. If I didn't need to appeal to potential employers, all this stuff would be running on `localhost`.

## Who do you think you are, [putting on such airs](https://achewood.com/2004/02/18/title.html)?

I'm a human who appreciates video games, peanut butter, and websites that let the back button do its job. I like watching ice hockey, but it stresses me out. I go for long walks, during which I concoct new things to worry about and try to let go of old ones. I like to read, mainly fiction.

I don't do social media, so this is where I exist online. If you want to talk, you can [send me email](mailto:mail@cedeless.com).

## OK, but 'cedeless'?

As origin stories go, this one is pedestrian: I bought a bag of seedless lemons once that was labeled in both English and French. I saw the C in _citrons_ out of the corner of my eye and thought for a moment they'd somehow misspelled "seedless". "Ceedless" led to "cedeless", and within an hour I was registering a domain name.

I like this kind of homonym play. It's not _funny_, exactly, but I think it's fun. "Cedeless" doesn't really mean anything.

Except...

I do think "cede less" kind of describes my approach to personal projects. I don't like shortcuts. I don't like frameworks. I want to make things myself, without relying too much on someone else's work.

I'm not writing my own web server, and I'm unlikely to, say, fell a tree myself for a woodworking project. I'm not inventing the universe so I can make an apple pie. But, when practical, I'm going to roll my own stuff rather than implement someone else's. I want to cede less control of my projects to platforms, services, and packages.

## What is Infinite, Worthless Time?

[Infinite, Worthless Time](/iwt/) is a blog. There's not a ton I want to share with the internet, but what I do have is there.

Blogs and content sites are good personal web development projects, because they encourage you to build a system that can gracefully handle arbitrary input. Did you handle the case where a post starts with a `ul`? Does your pagination scheme make sense when there are only five posts? It's more interesting than a static brochure site, even if the content is [less than profound](/iwt/2023/11/29/avalanche-numbers/).

## What is Shelf?

[Shelf](/shelf/) is a tool for keeping track of my video game library. It is very much a work a progress.

Over the years, I've bought charity bundles containing dozens of PC games, claimed free games from console subscription services, and 1

My current solution for this is broken into two parts. The first is a simple and crude single-page application (not public because it stores API keys as Javascript variables) that accepts the name of a game as a search term, queries an external data source for that term (currently the [Giant Bomb API](https://www.giantbomb.com/api/documentation/), but I'm considering switching to [IGDB](https://api-docs.igdb.com/#getting-started)), retrieves and displays information about the results, then passes that information to an Airtable base via Airtable's API.

For example... TKTKTK

## So did Copilot make all this or what? 

Nope. I did not use any large-language-model tools in the development of this site, at least not directly or intentionally.

## A colophon of sorts

This site is powered by a local installation of [Jekyll](https://jekyllrb.com/). Jekyll parses Markdown, compiles Sass, processes control-flow blocks, and produces a directory of HTML, CSS, and JS files that I basically just FTP to a server.

I'm using Matthew Butterick's [Valkyrie](https://mbtype.com/fonts/valkyrie/) and [Advocate](https://mbtype.com/fonts/advocate/) typefaces.

Colors are derived from [these Dieter Rams palettes](https://www.presentandcorrect.com/blogs/blog/rams-palette) collected by Chad Ashley.

## Theme control

By default, this site will match your operating system's theme. You can override that behavior here. The setting is stored in your browser's local storage.