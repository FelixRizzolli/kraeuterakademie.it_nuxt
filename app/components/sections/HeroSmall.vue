<template>
    <section class="contentelement_herosmall grid-container">
        <div v-if="data.title || data.link" class="content" ref="contentElement">
            <h1 v-if="data.title" class="title">{{ data.title }}</h1>
            <NuxtLink v-if="data.link" class="link-button" :to="data.link.href">{{ data.link.text }}</NuxtLink>
        </div>
        <div v-if="data.image" class="image scale-animation" ref="imageElement" :class="{ 'scale-active': showImageElement }">
            <img :src="data.image?.src" :alt="data.image?.alt" class="hero-image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Link {
    href: string;
    text: string;
}

interface Image {
    src: string;
    alt: string;
}

interface HeroSmallData {
    title?: string;
    link?: Link;
    image?: Image;
}

interface HeroSmallSettings {}

export interface HeroSmallProps {
    data: HeroSmallData;
    settings?: HeroSmallSettings;
}

const props = defineProps<HeroSmallProps>();

const contentElement = ref<HTMLElement>();
const imageElement = ref<HTMLElement>();
const showImageElement = ref(false);

onMounted(() => {
    if (imageElement.value instanceof HTMLElement) {
        const effectForImage = getScaleEffect(gsap);
        effectForImage(imageElement, showImageElement);
    }

    if (contentElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(contentElement);
    }
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

    .link-button {
        margin-top: 3.5rem;
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
