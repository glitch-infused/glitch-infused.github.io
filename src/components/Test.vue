<script setup lang="ts">

import DynCard from './DynCard.vue';
import imageUrl from '../assets/img.avif';

</script>

<template>
    <link rel="preload" :href="imageUrl">
    <div class="card-holder">
        <DynCard title="test" subtitle="test" description="lorem ipsum" color="red" :img="imageUrl" :tags="['tag1', 'tag2']"></DynCard>
    </div>
</template>

<style scoped>
.card-holder {
    position: relative;
    margin-left: 80px;
}
</style>