<template>
    <section class="contentelement_herosmall grid-container">
        <div v-if="title || link" class="content">
            <h1 v-if="title" class="title">{{ title }}</h1>
            <NuxtLink v-if="link" class="link-button" :to="link.href">{{ link.text }}</NuxtLink>
        </div>
        <div v-if="image" class="image">
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
    title?: string;
    link?: Link;
    image?: Image;
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

    img {
        width: 100%;
        height: auto;
    }
}

@media (max-width: 1023px) {
    .contentelement_herosmall {
        margin-bottom: 7.5rem;
        padding-top: 0;
    }

    .content {
        @include col-start(5);
        @include col(9);

        & {
            margin-top: 2rem;

            z-index: 0;
            grid-row: 2;
        }
    }

    .image {
        @include col-start(2);
        @include col(10);

        & {
            margin-top: 0;

            grid-row: 1;
        }
    }
}
</style>
