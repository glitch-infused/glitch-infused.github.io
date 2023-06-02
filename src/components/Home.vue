<script setup lang="ts">
import imgurl from '../assets/img.avif'
import DynCard from './DynCard.vue';


function randRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randInt(min: number, max: number) {
    return Math.floor(randRange(min, max));
}

var cards = [
  {
    "title": "Basic Web development experience",
    "subtitle": "Vue and Vite experience",
    "description": "I have some basic experience with Vue.js and Vite. During my years as a mostly back-end developer I found the combination of Vue and Vite optimal. This very site is self-made with Vue and Vite!",
    "tags": [
      "front-end",
      "web-dev",
      "vue.js",
      "vite.js"
    ]
  },
  {
    "title": "Back-end development",
    "subtitle": "Experienced in back-end development",
    "description": "For the most part of my career I have been focusing on back-end development. I have recently followed some courses on infrastructure design. I thanks to this experience I have written a custom high performance search engine, but sadly I had to discontinue it because of storage requirements.",
    "tags": [
      "back-end",
      "infrastructure",
      "network"
    ]
  },
  {
    "title": "Virtual polyglot",
    "subtitle": "Programming in many languages",
    "description": "I love learning new languages. Every time I learn a new one, it feels like a new adventure. This has lead to learning a ton of different languages: C, C++, C#, CSS, Go, HTML, Javascript, Python, Rust, Ruby, ... ",
    "tags": [
      "languages"
    ]
  },
  {
    "title": "Version and team management",
    "subtitle": "Git, Gitlab and Github",
    "description": "I am an active user of git and github. One of the first things I do after coming up with an idea for a new project is creating a new git repository. Even when I am not working with other people I find useing git very helpful to keep track of what changes I made to be able to recover incorrectly 'fixed' code. Version control also allows me to take notes on what I have done. On top of using git I believe documentation is one of the most important things in programming and in my opinion at least comments should be used not to explain how the code does something, but what it does and most importantly why!",
    "tags": [
      "Git", "GitLab", "GitHub", "Documentation"
    ]
  },
  {
    "title": "Version and team management",
    "subtitle": "Git, Gitlab and Github",
    "description": "I am an active user of git and github. One of the first things I do after coming up with an idea for a new project is creating a new git repository. Even when I am not working with other people I find useing git very helpful to keep track of what changes I made to be able to recover incorrectly 'fixed' code. Version control also allows me to take notes on what I have done. On top of using git I believe documentation is one of the most important things in programming and in my opinion at least comments should be used not to explain how the code does something, but what it does and most importantly why!",
    "tags": [
      "Git", "GitLab", "GitHub", "Documentation"
    ]
  },
  {
    "title": "Version and team management",
    "subtitle": "Git, Gitlab and Github",
    "description": "I am an active user of git and github. One of the first things I do after coming up with an idea for a new project is creating a new git repository. Even when I am not working with other people I find useing git very helpful to keep track of what changes I made to be able to recover incorrectly 'fixed' code. Version control also allows me to take notes on what I have done. On top of using git I believe documentation is one of the most important things in programming and in my opinion at least comments should be used not to explain how the code does something, but what it does and most importantly why!",
    "tags": [
      "Git", "GitLab", "GitHub", "Documentation"
    ]
  }
]

var range = [...Array(cards.length).keys()];

var colors = ["blue", "red", "green", "yellow", "orange"];

function getColor(i = 0) {
  while (i >= colors.length) {i -= colors.length}
  console.log(i);
  return colors[i];
}

</script>

<template>
    <link rel="preload" :href="imgurl">
    <h1>Glitch_infused</h1>
    <div class="cards-holder">
        <DynCard v-for="i in range" :title=cards[i].title :subtitle=cards[i].subtitle :description=cards[i].description :color="randInt(0, 5)" :image="imgurl" :tags=cards[i].tags></DynCard>
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

html {
  overflow: hidden;
}

</style>
