---
title: Dodge the Push
date: 2021-10
modified: 2023-07
tags: Flutter, Flame Engine, Play Games API, AdMob API, Pygame, Godot Engine
keywords: flutter games examples, flame engine examples
category: Featured projects
lang: en
status: published
thumbnail: images/projects/dodge-the-push/icon.webp
google_play: https://play.google.com/store/apps/details?id=com.nicopujia.dodgethepush
---

Simple, casual, arcade mobile game with a novel video game mechanic in which you must dodge, moving horizontally, the obstacles that come from above to avoid reaching the bottom (if not, you lose!).

In order to give a bit more meaning to the game, I included a global leaderboard which makes use of the [Play Games API](https://developers.google.com/games/services?hl=es-419), so player can compete globally or against their friends to have the highest score.

## Music

All the songs of this game were created by my friend [C25](https://www.youtube.com/@C_25Music). (*Yeah, I'm not a musician*).

## More than just one version

The first idea of the game mechanic came to my mind in 2021, when I used to make simple games using Pygame. So I created an extremely simple prototype with it, only with the core mechanic:

![Pygame version gameplay]({static}/images/projects/dodge-the-push/pygame/gameplay.jpg)
![Pygame version end screen]({static}/images/projects/dodge-the-push/pygame/game-over.jpg)

And I liked it, so I decided to improve it. But this was a mobile game, and Pygame didn't support those. So, I remade it with Godot, as I had already made some games with it.

![Godot version gameplay]({static}/images/projects/dodge-the-push/godot/title.jpg)
![Godot version gameplay]({static}/images/projects/dodge-the-push/godot/gameplay.jpg)
![Godot version gameplay]({static}/images/projects/dodge-the-push/godot/pause.jpg)
![Godot version end screen]({static}/images/projects/dodge-the-push/godot/game-over.jpg)

Everything was great, until in 2023 I got [my Google Play Developer account](https://play.google.com/store/apps/dev?id=8059097220194731179) and wanted to export the game in AAB format to publish it to the Google Play Store.

I was having *a lot* of trouble with that. And I also wanted to include ads, which were a headache to include with Godot 3. And by the time I was trying to publish the game to the Google Play Store, I had already developed two apps using Flutter, [one of them]({filename}/game-finder.md) with ads. Finally, I found [Flame Engine](https://docs.flame-engine.org/latest/). The game was simple. So, I decided to remake it once again, and here it is, published in the Google Play Store, by myself to the world. Enjoy :)

![Home screen]({static}/images/projects/dodge-the-push/title.jpg)
![Gameplay 1]({static}/images/projects/dodge-the-push/gameplay-1.jpg)
![Gameplay 2]({static}/images/projects/dodge-the-push/gameplay-2.jpg)
![Gameplay 3]({static}/images/projects/dodge-the-push/gameplay-3.jpg)
![Defeat screen]({static}/images/projects/dodge-the-push/continue.jpg)
![Final screen]({static}/images/projects/dodge-the-push/game-over.jpg)
