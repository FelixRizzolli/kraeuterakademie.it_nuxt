<template>
    <section class="contentelement_textelement grid-container">
        <h2 v-if="title" class="title" ref="titleElement">{{ title }}</h2>
        <div v-if="text" class="content" v-html="text" ref="contentElement"></div>
        <NuxtLink v-if="link" class="link-button" :to="link.href" ref="linkElement">{{ link.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Link {
    href: string;
    text: string;
}

export interface TextElementProps {
    title?: string;
    text?: string;
    link?: Link;
}

const props = defineProps<TextElementProps>();

const titleElement = ref<HTMLElement>();
const contentElement = ref<HTMLElement>();
const linkElement = ref<HTMLElement>();

onMounted(() => {
    if (titleElement.value) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(titleElement);
    }

    if (contentElement.value) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(contentElement);
    }

    if (linkElement.value) {
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
