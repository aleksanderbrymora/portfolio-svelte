---
title: Tools
year: 2020
---

<style>
    article { @apply prose prose-invert prose-xl mb-32; }
    img { @apply rounded-lg; }
</style>

<article>

# Tools

I'm passionate about making things easy for both myself and others - maybe that's why I got into programming? Anyway I've created multiple tools throughout my programming adventure, here are some of them with a short description.

## Firebase Hooks

[Firebase Hooks](https://github.com/aleksanderbrymora/firebase-hooks-react) were my most official project up to date (I even got a Star and a pull request from a random person on Github!).
I was frustrated with how firebase was implemented and used in react, so after searching internet and finding nothing that suited my needs I decided to do it myself. 

It was my first big project with TypeScript, so there are a lot of things there that could've been done in a better way - and will be at some point. 

What I learnt: 
- TypeScript Basics
- Creating custom hooks
- Understanding how to use and create closures (in storage interfacing especially)
- Organizing a big project.
- Managing a relatively big project _(for my knowledge at least)_ with Github - creating issues, not just pushing code, but working with branches and merging them with pull requests.
- Working with others with different skills - I had a friend which also graduated from GA, from a class I thought in that helped with some things.
- Thinking about API and DX. There were a lot of ways to implement these hooks, but what I aimed at was to create an experience where a Dev installs them and after just a few lines of code, has a connection to database and can log people in. 

The library itself aged alright, based on the fact that I had no prior experience in creating such things before. It's not advisable to use it now, but I'll most definitely redo it as it's a great project for learning typescript.

## Seedr

![seedr showcase](/projects/seedr.gif)

[Seedr](https://seedr.netlify.app/) is a very small utility for creating Seed Data in Rails app. It's using some fake information from external API, and creates text to copy and paste in your Rails app.

## Drumkits

The thing is that tools are the best when they do something that took us ages in seconds - these just hit differently. That's exactly what I wanted to do with [Drumkits scraper](https://github.com/aleksanderbrymora/drumkit from r/drumkits. It's using Puppeteer to grab links that people put in r/drumkits subreddit, goes to each of these links and tries to download all of the files from these pages.  

</article>