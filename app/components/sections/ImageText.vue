<template>
    <section class="contentelement_imagetext grid-container">
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div v-if="data.image" class="image scale-animation" ref="imageElement" :class="{ 'scale-active': showImageElement }">
            <img :src="data.image.src" :alt="data.image.alt" />
        </div>
        <div v-if="data.text1" class="text" v-html="data.text1" ref="text1Element"></div>
        <div v-if="data.infos" class="infos" v-html="data.infos" ref="infosElement"></div>
        <div v-if="data.text2" class="text" v-html="data.text2" ref="text2Element"></div>
        <NuxtLink v-if="data.link" class="link-button" :to="data.link.href" ref="linkElement">{{ data.link.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Image {
    src: string;
    alt: string;
}

interface Link {
    href: string;
    text: string;
}

interface ImageTextData {
    title?: string;
    image?: Image;
    text1?: string;
    infos?: string;
    text2?: string;
    link?: Link;
}

interface ImageTextSettings {}

export interface ImageTextProps {
    data: ImageTextData;
    settings?: ImageTextSettings;
}

const props = defineProps<ImageTextProps>();

const imageElement = ref<HTMLElement>();
const showImageElement = ref(false);

const titleElement = ref<HTMLElement>();
const text1Element = ref<HTMLElement>();
const infosElement = ref<HTMLElement>();
const text2Element = ref<HTMLElement>();
const linkElement = ref<HTMLElement>();

onMounted(() => {
    if (titleElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(titleElement);
    }

    if (imageElement.value instanceof HTMLElement) {
        const effectForImage = getScaleEffect(gsap);
        effectForImage(imageElement, showImageElement);
    }

    if (text1Element.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(text1Element);
    }

    if (infosElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(text1Element);
    }

    if (text2Element.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(text2Element);
    }

    if (linkElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(linkElement);
    }
});
</script>

<style lang="scss" scoped>
.contentelement_imagetext {
    margin-bottom: 15rem;
}

.title {
    @include col-start(3);
    @include col(5);

    & {
        margin-bottom: 7.5rem;
    }
}

.image {
    @include col-start(3);
    @include col(4);
    @include row(4);

    img {
        width: 100%;
        height: auto;
    }
}

.text {
    @include col-start(9);
    @include col(4);
    @include font-19-30-5-L();

    &:first-of-type {
        margin-top: 12rem;
    }
}

.infos {
    @include col-start(10);
    @include col(4);
    @include font-50-63-1-BL();
    @include fontFamilyHeading();

    & {
        margin: 7.5rem 0;

        color: $colorFontLight;
    }

    &::before,
    &::after {
        display: block;
        content: "";
        width: 45%;
        height: 0.3rem;
        background-color: $colorFontLight;
    }

    &::before {
        margin-bottom: 4rem;
    }

    &::after {
        margin-top: 4rem;
    }
}

.link-button {
    @include col-start(9);
    @include col(4);

    & {
        margin-top: 4.5rem;
    }
}

:deep(h3:not(:first-child)) {
    margin-top: 4.5rem;
}

@media (max-width: 1023px) {
    .contentelement_imagetext {
        margin-bottom: 7.5rem;
    }

    .title {
        @include col(11);

        & {
            margin-bottom: 4.5rem;
        }
    }

    .image {
        @include col-start(2);
        @include col(10);
    }

    .infos {
        @include col-start(3);
        @include col(11);

        & {
            margin: 4.5rem 0 0 0;
        }
    }

    .text {
        @include col-start(2);
        @include col(10);

        & {
            margin-top: 4.5rem;
        }
    }

    .link-button {
        @include col-start(2);
        @include col(12);
    }
}
</style>
