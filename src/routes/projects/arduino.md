---
title: Arduino
year: 2019
---

<style>
    article { @apply prose prose-invert prose-xl mb-32; }
    img { @apply rounded-lg max-w-full; }
</style>

<article>

# Arduino

## Line-following robot

![Line following robot in action](/projects/arduino-robot.gif)

This cute little robot is a culmination of a full semester of learning programming with a few of my friends. We used Arduino to make a robot follow a black line and other guides towards the end of a track. It was my first wrangle with optimizations in code so that the robot would keep up with all the information that was coming in. It was a life-changing experience and we have it on video!

To determine how to follow a line, the robot uses a whole array of sensors: Ultrasonic, IR, or touch. 

## Caesar and Substitution Cypher - Encryption & Decryption

![Showcase of bruteforce decryption](/projects/cipher.gif)

It's my first, big programming project written in C. 

It’s a tool for encrypting and decrypting both Caesar and Substitution Cypher when given a key. It also has a dictionary-based decryption for Caesar Cypher, which is shown in the video. This program has definitely the biggest amount of lines in one file I’ve ever written...

## Fully automated wine cellar

![Cellar showcase]()

This wine cellar, which I built with my dad from ground up, was my biggest hardware-related project. What first started off as creating a simple up/down switch to just open up the hatch, turned into a fully automated, climate controlled _bunker_ used for storing food, wine, and other things. 

---

The cellar is programmed using a __state machine__ mindset in Arduino language, though I've since rewritten it with C++, so I could have an easier time upgrading it later. I'm still pushing through making it work, because I've only had contact with C++ during this project, and I'm yet to wield it's power and utilise it to the fullest. I've overcome many hurdles, like learning to debounce buttons (which is not a thing in Web Dev) or overspecing power supplies, due to more power draw of an electric engine during startup. 

The program now controls humidity, temperature and lighting autonomously through a dehumidifier, heater and RGB lighting. It also displays all of these stats on an OLED screen. 

The biggest challenge though, was to create a non-blocking program, without delays. This was harder said than done, as there is quite a lot going on for such a small CPU, but I'm quite sure it's ok now. 

Have a look at my code, and maybe help me with C++.., please? ;)

Here is the [arduino code](https://github.com/aleksanderbrymora/hatch) and here's the [C++ code](https://github.com/aleksanderbrymora/hatch-plus-plus)

</article>