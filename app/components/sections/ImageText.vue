<template>
    <section class="contentelement_imagetext grid-container">
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <StrapiImage v-if="data.image" :image="data.image" scale-animation ref="imageElement" />
        <div v-if="data.textTop" class="text" ref="textTopElement">
            <StrapiBlocksText :nodes="data.textTop" />
        </div>
        <div
            v-if="data.textHighlight"
            class="text-highlight"
            v-html="data.textHighlight"
            ref="textHighlightElement"
        ></div>
        <div v-if="data.textBottom" class="text" ref="textBottomElement">
            <StrapiBlocksText :nodes="data.textBottom" />
        </div>
        <NuxtLink v-if="data.link" class="link-button" :to="data.link.href" ref="linkElement">{{
            data.link.text
        }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import type { StrapiImage } from '../elements/StrapiImage.vue';

    interface Link {
        href: string;
        text: string;
    }

    interface ImageTextData {
        title?: string;
        image?: StrapiImage;
        textTop?: string;
        textHighlight?: string;
        textBottom?: string;
        link?: Link;
    }

    interface ImageTextSettings {}

    export interface ImageTextProps {
        data: ImageTextData;
        settings?: ImageTextSettings;
    }

    const props = defineProps<ImageTextProps>();

    const titleElement = ref<HTMLElement>();
    const textTopElement = ref<HTMLElement>();
    const textHighlightElement = ref<HTMLElement>();
    const textBottomElement = ref<HTMLElement>();
    const linkElement = ref<HTMLElement>();

    onMounted(() => {
        if (titleElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(titleElement);
        }

        if (textTopElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(textTopElement);
        }

        if (textHighlightElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(textHighlightElement);
        }

        if (textBottomElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(textBottomElement);
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

    .image-container {
        @include col-start(3);
        @include col(4);
        @include row(4);

        :deep(.image) {
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

    .text-highlight {
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
            content: '';
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

        .image-container {
            @include col-start(2);
            @include col(10);
        }

        .text-highlight {
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
