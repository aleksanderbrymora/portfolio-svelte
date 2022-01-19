---
title: Cheats
year: 2020
github: https://github.com/aleksanderbrymora/gimme-cheats
website: https://gimme-cheats-client-git-master.aleksanderbrymora.vercel.app/create
---

<style>
    article { @apply prose prose-invert prose-xl mb-32; }
    img { @apply rounded-lg max-w-full; }
</style>

<article>

# Cheat sheets

![Cheats usage showcase](/projects/cheats.gif)

## TLDR 

Generates .docx files from lists of words. A project that started my whole programming career.

## Story

The *Cheats sheets* projects was inspired by my middle school experiences, where my friends used to make cheat sheets for language lessons and it used to take them ages. That inspired me and my friend to create the first draft, written in Java (which I barely knew back then). It took in a list of words with their translations and converted them into a Word document with neatly formatted words (I have sadly lost that program). 

The idea has stayed with me, and has been a launching pad to learn new languages like Python.  I used Python to create a CLI version of the program learning the language in the capacity that was suiting my needs at the time. I also added a translation function that used an API to translate the words. Here is a link to that age-old project: [https://github.com/aleksanderbrymora/Cheat-sheets](https://github.com/aleksanderbrymora/Cheat-sheets) 

![Early version of cheatsheet generation with python](/projects/cheats-python.gif)

During my work at General Assembly in Sydney, I used my newfound knowledge to rewrite the app to run on the Web. I used Next.js as a Frontend Framework and focused heavily on making the app accessible to visually impaired; it can be fully navigated with keyboard and uses aria tags to describe or label fields. Although I really liked that implementation, it was flawed by my lack of experience and lack of neatness. Here is a reference for that code: [https://github.com/aleksanderbrymora/cheats](https://github.com/aleksanderbrymora/cheats) 

Full of confidence, after finishing the bootcamp, I took on the challenge to use my shiny new knowledge to rewrite the app yet again, this time with scale in mind and with adding a backend to save the sheets for others to use. I first started with a React app and GraphQL backend in a monorepo structure which worked out nicely. The next challenge was to scale up by adding even more features. Here is a link to that project where I left it: [https://github.com/aleksanderbrymora/mobx-cheatsheets](https://github.com/aleksanderbrymora/mobx-cheatsheets)). 

I moved the project back to Next.js and NestJS, and you can have a look at it here, that's the latest version: [https://github.com/aleksanderbrymora/gimme-cheats](https://github.com/aleksanderbrymora/gimme-cheats). NestJS certainly added structure to the project but for me personally, it has really slowed the progress down, so I'm currently looking for new ways to improve the whole DX for myself all the while learning new and exciting things. I'm keeping a very close eye on Svelte Kit now!

This is definitely a favorite project of mine, one that often return to, as you can tell by the many iterations of it.

## Current stage 

The app is still work-in-progress, but I think the code shows how much I've put into its many iterations, just have a look at my Github.
The project is currently in hiatus, as I have more pressing ones on the go. It's waiting for me to discover some better (and easier) tech to build it with. All the ones before were solving issues with the previous techs, but created a whole suite of new hurdles. Currently, I'm eying up Remix.run, and waiting for their teaser to support Svelte.
</article>