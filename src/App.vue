<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import Footer from './components/Footer.vue'
import imgurl from './assets/img.avif'
</script>

<template>
    <link rel="preload" :href="imgurl">
    <SideBar></SideBar>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<style scoped>
</style>
