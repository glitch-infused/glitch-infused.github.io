<script lang="ts">

export default {
    props: {
        "title": String,
        "subtitle": String,
        "description": String,
        "color": String,
        "img": String,
        "tags": Array
    }
}

</script>
<template>
    <div :class="`card ` + color">
        <div class="card-innerbox">
            <div class="card-image-wrapper">
                <img class="card-image" :src="img">
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

.card:hover {
    box-shadow: 0 34px 32px -33px rgba(0, 0, 0, .18);
    transform: translate(0px, -12px);
}

.card-innerbox {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.card-image-wrapper {
    width: 25vw;
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
    left: 3px;
    width: 95%;
}

.card-tag-wrapper {
    position: absolute;
    bottom: 0px;
    width: 100%;
}

.card-tag {
    display: inline-block;
    background-color: #424242;
    color: #fff;
    border-radius: 8px;
    padding: 1px 6px 1px 16px;
    margin-right: 20px;
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
</style>