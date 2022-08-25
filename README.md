# knights-edge

[![Netlify Status](https://api.netlify.com/api/v1/badges/25e25d3a-2a39-402c-b2b7-ac726b46e5df/deploy-status)](https://app.netlify.com/sites/vigorous-boyd-fccfdb/deploys)

There is nothing quite so educational as building a game in a new framework or language.
The complexity and intricacy inherent in game design really lends itself to requiring desperate googling and "Lets see if this works"..s.
This is a turn-based RPG game that is being built in VueJS. As will become apparent in the code, there are several "panes" that allow the player to 
navigate the town and surrounding areas to find fights, materials, xp and gold. I plan to flesh it out considerably as I go, with
gear set bonuses, quests and dungeons, and a full leveling system.
And when Im done with all that?
I don't know. Magic, maybe?
We shall see.

Technical stuff:
The components are separated into folders based on their parents, for the most part.
All the heavy lifting is naturally done by the App.vue component, so I'd recommend you start there if you want to dive into this repo.
In the assets folder you'll find the images being used as well as files containing JSON objects full of gear and equipment that will make
their way into the game, with more to come.
I plan to include a Firebase-held authentication server and character save system in the very near future.
I haven't made all the important decisions yet, and everything is subject to change as I become more familiar with Vue as a framework.
As of the writing of this README, I am on day two of learning Vue, having been mostly pure JS/JQuery or React.

If you see anything glaringly wrong or missing, let me know.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
