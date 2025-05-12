<template>
    <section class="contentelement_herosmall grid-container">
        <div class="content">
            <h1 class="title">{{ title }}</h1>
            <NuxtLink class="link-button" :to="link?.href">{{ link?.text }}</NuxtLink>
        </div>
        <div class="image">
            <img :src="image?.src" :alt="image?.alt" class="hero-image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from "vue";

interface Link {
    href: string;
    text: string;
}

interface Image {
    src: string;
    alt: string;
}

interface HeroSmallProps {
    title: string;
    link: Link;
    image: Image;
}

const props = defineProps<HeroSmallProps>();

onBeforeMount(() => {
    console.log("HeroSmall component mounted");
});
</script>

<style lang="scss" scoped>
.contentelement_herosmall {
    margin-bottom: 15rem;
    padding-top: 30rem;

    position: relative;
}

.content {
    @include col-start(3);
    @include col(4);

    & {
        z-index: 1;
        grid-row: 1;

        display: flex;
        flex-direction: column;
    }
}

.title {
    text-align: right;
}

.link-button {
    margin-top: 2.5rem;
    align-self: flex-end;
}

.image {
    @include col-start(6);
    @include col(6);

    & {
        margin-top: 17rem;
        grid-row: 1;
        z-index: 0;
    }
}
</style>
