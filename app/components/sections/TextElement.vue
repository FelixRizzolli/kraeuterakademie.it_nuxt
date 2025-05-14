<template>
    <section class="contentelement_textelement grid-container">
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div v-if="data.content" class="content" v-html="data.content" ref="contentElement"></div>
        <NuxtLink v-if="data.link" class="link-button" :to="data.link.href" ref="linkElement">{{ data.link.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Link {
    href: string;
    text: string;
}

interface TextElementData {
    title?: string;
    content?: string;
    link?: Link;
}

interface TextElementSettings {}

export interface TextElementProps {
    data: TextElementData;
    settings?: TextElementSettings;
}

const props = defineProps<TextElementProps>();

const titleElement = ref<HTMLElement>();
const contentElement = ref<HTMLElement>();
const linkElement = ref<HTMLElement>();

onMounted(() => {
    if (titleElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(titleElement);
    }

    if (contentElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(contentElement);
    }

    if (linkElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(linkElement);
    }
});
</script>

<style lang="scss" scoped>
.contentelement_textelement {
    margin-bottom: 15rem;
}

.title {
    @include col-start(3);
    @include col(6);

    & {
        margin-bottom: 7.5rem;
    }
}

.content {
    @include col-start(6);
    @include col(6);

    &:not(:last-child) {
        margin-bottom: 4.5rem;
    }
}

.link-button {
    @include col-start(6);
    @include col(6);
}

:deep(p:not(:first-of-type)) {
    margin-top: 3rem;
}

.content {
    @include font-24-39-5-L();
}

@media (max-width: 1023px) {
    .contentelement_textelement {
        margin-bottom: 7.5rem;
    }

    .title {
        @include col-start(3);
        @include col(11);

        & {
            margin-bottom: 1rem;
        }
    }

    .content {
        @include col-start(2);
        @include col(12);
    }
}
</style>
