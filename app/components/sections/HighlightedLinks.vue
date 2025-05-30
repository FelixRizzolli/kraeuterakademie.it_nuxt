<template>
    <section class="contentelement_highlightedlinks grid-container">
        <NuxtLink
            :to="imageLink.link.href"
            class="link-container"
            v-for="(imageLink, index) in data.imageLinks"
            :key="index"
        >
            <StrapiImage :image="imageLink.image" />
            <span class="title">{{ imageLink.link.text }}</span>
        </NuxtLink>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface Link {
        href: string;
        text: string;
    }

    interface ImageLink {
        image: StrapiImage;
        link: Link;
    }

    interface HighlightedLinksData {
        imageLinks: Array<ImageLink>;
    }

    interface HighlightedLinksSettings {
        default?: string;
    }

    export interface HighlightedLinksProps {
        data: HighlightedLinksData;
        settings?: HighlightedLinksSettings;
    }

    const props = defineProps<HighlightedLinksProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_highlightedlinks {
        margin-bottom: 15rem;
    }

    @media (max-width: 1023px) {
        .contentelement_highlightedlinks {
            margin-bottom: 7.5rem;
        }
    }
</style>
