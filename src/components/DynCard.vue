<script lang="ts">

export default {
    props: {
        "title": String,
        "subtitle": String,
        "description": String,
        "color": String,
        "image": String,
        "tags": Array,
    }
}

</script>
<template>
    <div :class="`card ` + color">
        <div class="card-innerbox">
            <div class="card-image-wrapper">
                <img class="card-image" :src="image">
            </div>
            <div class="card-text-wrapper">
                <div class="card-title">{{ title }}</div>
                <div class="card-subtitle">{{ subtitle }}</div>
                <div class="card-bar"></div>
                <div class="card-description">{{ description }}</div>
                <div class="card-tag-wrapper">
                    <span class="card-tag" v-for="tag in tags">{{tag}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

* {
    /* settings */
    --animation-time: 0.66s;
}

.card {
    position: relative;
    width: 75vw;
    max-width: 750px;
    aspect-ratio: 2 / 1;
    margin-bottom: 40px;
}
.card-innerbox {
    position: relative;
    width: 75vw;
    max-width: 750px;
    aspect-ratio: 2 / 1;
    margin-bottom: 40px;
    border-radius: 10px;
    background-color: #fff;
    border: 2px solid #ddd;
    font-size: 18px;
    color: #424242;
    text-align: left;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 21px -12px rgba(0, 0, 0, .66);
    transition: box-shadow var(--animation-time) ease, transform var(--animation-time) ease;
}

.card:hover .card-innerbox {
    box-shadow: 0 34px 32px -33px rgba(0, 0, 0, .18);
    transform: translate(0px, -12px);
}

.card-image-wrapper {
    width: 25vw;
    height: 100%;
    max-width: 250px;
    aspect-ratio: auto;
    overflow: hidden;
}
.card-image {
    transition: transform var(--animation-time) ease;
    position: relative;
}
.card:hover .card-image {
    transform: scale(1.05) rotate(1deg);
}
.card-text-wrapper {
    position: absolute;
    top: 7%;
    bottom: 7%;
    left: calc(min(25vw, 250px));
    width: calc(100% - 25vw);
    font-size: 17px;
}
.card-text-wrapper::before,
.card-text-wrapper::after {
    z-index: 0;
    content: "";
    position: absolute;
    display: block;
    background: #fff;
    top: -35px;
    left: -40px;
    height: 160%;
    width: 60px;
    transform: rotate(8deg);
}
.card-text-wrapper * {
    position: relative;
    z-index: 1;
}
.card-title {
    font-family: 'Voces', 'Open Sans', arial, sans-serif;
    font-size: 24px;
}
.card-subtitle {
    margin-left: 4px;
    font-family: 'Voces', 'Open Sans', arial, sans-serif;
    color: #888;
}
.card-bar {
    --height: 4px;
    left: 16px;
    width: 80px;
    height: var(--height);
    margin: 8px 0;
    border-radius: calc(var(--height) / 2);
    background-color: #424242;
    transition: width var(--animation-time) ease, left var(--animation-time) ease;
}

.card:hover .card-bar {
    left: -4px;
    width: calc(100% + 8px);
}

.card-description {
    display: -webkit-box;
    position: relative;
    min-height: 6lh;
    /*max-height: 7lh;*/
    overflow: hidden;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-tag-wrapper {
    position: absolute;
    bottom: 0px;
    width: 100%;
}

.card-tag {
    font-size: 12px;
    display: inline-block;
    background-color: rgba(0, 0, 0, .18);
    border-radius: 8px;
    padding: 1px 6px 1px 16px;
    margin-right: 8px;
    vertical-align: middle;
    text-align: center;
    width: max-content;
}
.card-tag::before {
    content: "";
    display: inline-block;
    position: relative;
    top: -2px;
    left: -8px;
    border-radius: 3px;
    height: 6px;
    width: 6px;
    background-color: aqua;
}


/* colors yay */
.card.blue .card-bar {
    background-color: #0088FF;
}
.card.blue .card-tag {
    background-color: #0088FF50;
}
.card.blue .card-tag::before {
    background-color: #0088FF;
}
.card.blue .card-image-wrapper {
    background-color: #0088FF50;
}
.card.red .card-bar {
    background-color: #D62F1F;
}
.card.red .card-tag {
    background-color: #D62F1F50;
}
.card.red .card-tag::before {
    background-color: #D62F1F;
}
.card.red .card-image-wrapper {
    background-color: #D62F1F50;
}
.card.green .card-bar {
    background-color: #40BD00;
}
.card.green .card-tag {
    background-color: #40BD0050;
}
.card.green .card-tag::before {
    background-color: #40BD00;
}
.card.green .card-image-wrapper {
    background-color: #40BD0050;
}
.card.yellow .card-bar {
    background-color: #F5AF41;
}
.card.yellow .card-tag {
    background-color: #F5AF4150;
}
.card.yellow .card-tag::before {
    background-color: #F5AF41;
}
.card.yellow .card-image-wrapper {
    background-color: #F5AF4150;
}
.card.orange .card-bar {
    background-color: #FF5722;
}
.card.orange .card-tag {
    background-color: #FF572250;
}
.card.orange .card-tag::before {
    background-color: #FF5722;
}
.card.orange .card-image-wrapper {
    background-color: #FF572250;
}
.card.grey .card-bar {
    background-color: #424242;
}
.card.gray .card-bar {
    background-color: #424242;
}
.card.grey .card-image-wrapper {
    background-color: #0088FF50;
}

</style>