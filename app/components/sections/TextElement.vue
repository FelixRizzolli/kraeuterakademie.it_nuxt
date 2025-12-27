<template>
    <SectionElement
        class="contentelement_textelement grid-container"
        :spacing="settings?.spacing"
        :style="settings?.textElementStyle"
    >
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div v-if="data.content" class="content" ref="contentElement">
            <LexicalRenderer :nodes="data.content" />
        </div>
        <NuxtLink
            v-if="data.link"
            class="link-button"
            :to="data.link.href || '/'"
            :target="data.link.target ?? '_self'"
            ref="linkElement"
        >
            {{ data.link.text }}
        </NuxtLink>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface TextElementData {
        title?: string;
        content?: RichText;
        link?: Link;
    }

    interface TextElementSettings {
        spacing: Spacing;
        textElementStyle: string;
    }

    export interface TextElementProps {
        data: TextElementData;
        settings: TextElementSettings;
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
    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();

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
