<template>
    <SectionElement
        class="contentelement_imagetext grid-container"
        :spacing="settings?.spacing"
        :style="settings?.imageTextStyle"
    >
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <MediaElement v-if="data.image" :media="data.image" scale-animation ref="imageElement" />
        <div v-if="data.textTop" class="text" ref="textTopElement">
            <LexicalRenderer :nodes="data.textTop" />
        </div>
        <div
            v-if="data.textHighlight"
            class="text-highlight"
            v-html="data.textHighlight"
            ref="textHighlightElement"
        ></div>
        <div v-if="data.textBottom" class="text" ref="textBottomElement">
            <LexicalRenderer :nodes="data.textBottom" />
        </div>
        <NuxtLink
            v-if="data.link"
            class="link-button"
            :to="data.link.href || '/'"
            ref="linkElement"
            :target="data.link.target ?? '_self'"
        >
            {{ data.link.text }}
        </NuxtLink>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface ImageTextData {
        title?: string;
        image?: WebMedia;
        textTop?: RichText;
        textHighlight?: string;
        textBottom?: RichText;
        link?: Link;
    }

    interface ImageTextSettings {
        spacing: Spacing;
        imageTextStyle: string;
    }

    export interface ImageTextProps {
        data: ImageTextData;
        settings: ImageTextSettings;
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
    .title {
        @include col-start(3);
        @include col(5);

        @include wordbreak();

        & {
            margin-bottom: 7.5rem;
        }
    }

    .media-container {
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
        .title {
            @include col(11);

            & {
                margin-bottom: 4.5rem;
            }
        }

        .media-container {
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
