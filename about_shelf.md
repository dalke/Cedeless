---
title: About Shelf
layout: about
permalink: /about/shelf/
---

Shelf is a thing I'm building to help keep track of my video game library. It's a work in progress.

## My current solution

There are two parts to my current system: a simple homegrown web app for retrieving canonical details about the game, and an Airtable base that stores information about each game and its copies. Yes, a "game" and its "copies" are different concepts in my world. I'll get back to that idea shortly.

When I buy a new game, I call up my web app (it's not on the internet because I artlessly store some plaintext API keys as Javascript variables) and search for the game. The app queries an external data source ([Giant Bomb's API](https://www.giantbomb.com/api/documentation/)) and returns the game's name and earliest release date. I can then click a button to send that data to Airtable.

The app creates a new record in the main table of my Airtable base using the game's name and its release date as a date object. From there, everything else I do is manual.

## Games and copies

Some data are relevant to a _game_. Things like:
- Name
- Release date
- Status (e.g. on my backlog, finished, abandoned)

Other data apply to a _copy_ of a game:
- Format (physical media or digital)
- Platform (e.g. Playstation, PC, iOS)
- Service through which I purchased or gained access to it (e.g. Steam, Xbox Game Pass)

After I've created a game record, I associate with it a copy record. If I own (or otherwise have access to) a game, it has at least one copy in my Airtable base. Games I've bought multiple times (because I like to have all my stuff in one place, but I've changed my mind multiple times about what that place should be) have multiple copies.

Copies can get tricky. Some copies have a containing relationship with other copies: I bought _Mass Effect: Legendary Edition_ on Steam (one copy, check), but it's a bundle of the first three _Mass Effect_ games (add one copy of each). Some copies came out on a particular platform but are now playable on others, thanks to "backward" compatibility.

## Why do any of this?

There are a handful of questions I want to be able to answer:
- Do I own a particular game?
- If so, where (i.e on what platform) can I play it?
- What's my status on a particular game? Did I finish it? Abandon it? Is it still sitting in my backlog, unplayed?
- When (like, what year) did I play a particular game? (Useful when I want to consider what my game of the year is)

Airtable can help me with the first three, but I've struggled with the last one. Not because it's not possible, but because it's tedious to maintain a list of years associated with each game. I replay some games, so it's not as simple as just storing a one-to-one, game-to-year relationship.

Do I _need_ to do any of this? Do I make better decisions because I have all this stuff in a grid on a screen? No, not really. But I enjoy the process, and it's fun to filter the data down and arrive at some insight.

## So that's all the stuff Shelf _isn't_...

Right. Shelf can't do nearly as much as Airtable. I can't even re-sort the table. But I was curious what I could put together if I had more direct control over the data. I'd like to build out Shelf to be a proper app with a server-side component. One page that could query a data source (either Giant Bomb or the [IGDB](https://api-docs.igdb.com/#getting-started)), combine the results with copy-specific input from me, then push all that to a relational database. With the game/copy and parent copy/child copy relationships in mind from the start, I might be able to put together something that's a little more streamlined than my Airtable base.

For now, [Shelf is a Jekyll template](https://github.com/dalke/Cedeless/blob/main/shelf.html) iterating over a couple YAML files. Each of the 20 games in my demo data includes an array of copy IDs that are foreign keys pointing to objects in the copies data. The template merges the data together via nested control flow blocks. It's not pretty, and it's not feature-rich, but it's a modest start.