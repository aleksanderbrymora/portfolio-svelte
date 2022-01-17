---
title: Arduino
year: 2019
github: https://github.com/aleksanderbrymora/Ceasar-and-Subtitution-Cypher
---

<style>
    article { @apply prose prose-invert prose-xl mb-32; }
    img { @apply rounded-lg; }
</style>

<article>

# Caesar and Substitution Cypher - Encryption & Decryption

![Showcase of bruteforce decryption](/projects/cipher.gif)

My first, big programming project, that was written in C. 

It’s a tool for encrypting and decrypting both Caesar and Substitution cypher when given a key. It also has a dictionary based decryption for Caesar Cypher, which is shown in the video. This program has definitely the biggest amount of lines in one file I’ve ever conceived...

# Fully automated wine cellar

![Cellar showcase]()

This wine cellar, I built with my dad from ground up, was my biggest hardware related project. What first started off by creating simple up/down switch to just open up the hatch, turned into a fully automated, climate controlled _bunker_ used for storing food, wine and other things. 

---

The cellar is programmed using a __state machine__ mindset in Arduino language - though I've rewritten it with C++, so I could have an easier time upgrading it later. I'm still pushing through making it work, because I've only had contact with C++ during this project, and I'm yet to weild it's power and utilise it to the fullest. I've overcome many hurdles, like learning to debounce buttons (which is not a thing in Web Dev) or overspecing powersupplies, due to more powerdraw of an electric engine during startup. 

Program on it's own now controls humidity, temperature and lighting through dehumidifier, heater and RGB lighting. It also displays all of these stats on an OLED screen. 

The biggest challenge though was to create a non-blocking program, without delays. This was harder said than done as there is quite a lot going on for such a small CPU, but I'm quite sure it's ok now. 

Have a look at my code, and maybe help me with C++..?

Here is [arduino code](https://github.com/aleksanderbrymora/hatch) and here is [C++ code](https://github.com/aleksanderbrymora/hatch-plus-plus)

</article>