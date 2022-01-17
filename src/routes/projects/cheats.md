---
title: Cheats
year: 2020
github: https://github.com/aleksanderbrymora/gimme-cheats
website: https://gimme-cheats-client-git-master.aleksanderbrymora.vercel.app/create
---

<style>
    article { @apply prose prose-invert prose-xl mb-32; }
    img { @apply rounded-lg; }
</style>

<article>

# Cheats

![Cheats usage showcase](/static/projects/cheats.gif)

## TLDR 

Generates .docx files from lists of words. A project that started my whole programming career.

## Story

*Cheats* projects were inspired by my middle school experiences, where my friends used to make cheat sheets for language lessons and it used to take them ages to do so. That inspired me and my friend, back then, to create a first draft, written in Java (which I barely knew back then). It took in a list of words with their translations and converted them into a Word document with neatly formatted words (I have sadly lost that program). 

The idea stayed and has been a jumping pad for me to learn new languages like Python, with which I used to create a cli version of the program learning the language from ground up to suit my needs. I also added a translation function that used an API to translate the words. Here is a link to that ages old project: [https://github.com/aleksanderbrymora/Cheat-sheets](https://github.com/aleksanderbrymora/Cheat-sheets) 

During my work at General Assembly I came back with my newfound knowledge to rewrite the app to run on the Web. I used Next.js as a Frontend Framework and focused heavily on making the app accessible - it's fully navigable by keyboard and uses aria tags to describe or label fields. Although I really liked that implementation it was flawed by my lack of experience and just a mess of organisation. In any case here is a reference for that code: [https://github.com/aleksanderbrymora/cheats](https://github.com/aleksanderbrymora/cheats) 

Full of confidence, after finishing the Bootcamp, I took on the challenge to use my newest shiny knowledge to rewrite the app yet again, this time with scale in mind and with adding a backend to save the sheets for others to use. I first started with a React app and GraphQL backend in a monorepo structure which worked out nicely until I needed to start scaling the app to have more features. Lack of conventions when building from ground up can be a blessing or a curse, for me it's always a curse (here is a link to that project in a state I left it: [https://github.com/aleksanderbrymora/mobx-cheatsheets](https://github.com/aleksanderbrymora/mobx-cheatsheets)). 

I moved the project back to using Next.js and NestJS and you can have a look at it here: [https://github.com/aleksanderbrymora/gimme-cheats](https://github.com/aleksanderbrymora/gimme-cheats). NestJS certainly added structure to the project but really slowed it down, so I'm currently looking for new ways to improve the whole DX for myself all the while learning new and exciting things. I'm keeping a very close eye on Svelte Kit now!

This is definitely a favorite project of mine that I always come back to. I've created many iterations of it - to different degrees of success.

## Current stage 

The app is very unfinished, but I think the code shows how much I put in into many iterations - so have a look in my github.
Project is currently in hiatus, as I have more pressing ones on my mind. It's currently sitting on the backburner, waiting for me to discover some better (and easier) tech to build it with. All the ones before were solving issues with the previous techs, but created a whole suite of new hurdles. I'm eying Remix.run currently, but I'm waiting for their teaser to support Svelte to come true.
</article>