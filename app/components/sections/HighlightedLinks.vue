<template>
    <section class="contentelement_highlightedlinks grid-container">
        <NuxtLink
            :to="imageLink.link.href"
            class="link-container"
            v-for="(imageLink, index) in data.imageLinks"
            :key="index"
        >
            <span class="title">{{ imageLink.link.text }}</span>
            <StrapiImage :image="imageLink.image" />
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

    .link-container {
        display: grid;
        column-gap: 4.5rem;

        text-decoration: none;

        &:nth-child(3n + 1) {
            @include col-start(2);
            @include col(6);

            & {
                grid-template-columns: repeat(6, 1fr);
            }
        }

        &:nth-child(3n + 2) {
            @include col-start(10);
            @include col(4);

            & {
                margin-top: 35rem;

                grid-template-columns: repeat(5, 1fr);
            }
        }

        &:nth-child(3n) {
            @include col-start(5);
            @include col(4);

            & {
                margin-top: -20rem;

                grid-template-columns: repeat(6, 1fr);
            }
        }
    }

    .title {
        @include font-50-63-1-B();
        @include fontFamilyHeading();

        & {
            z-index: 1;

            display: block;
            grid-row: 1;

            text-align: right;
        }
    }

    .link-container:nth-child(3n + 1) .title {
        @include col-start(2);
        @include col(4);
    }

    .link-container:nth-child(3n + 2) .title {
        @include col-start(1);
        @include col(4);
    }

    .link-container:nth-child(3n) .title {
        @include col-start(1);
        @include col(5);
    }

    .image-container {
        margin-top: 3rem;

        width: 100%;
        height: auto;

        grid-row: 1;
    }

    .link-container:nth-child(3n + 1) .image-container {
        @include col-start(1);
        @include col(6);
    }

    .link-container:nth-child(3n + 2) .image-container {
        @include col-start(2);
        @include col(4);
    }

    .link-container:nth-child(3n) .image-container {
        @include col-start(3);
        @include col(4);
    }

    @media (max-width: 1023px) {
        .contentelement_highlightedlinks {
            margin-bottom: 7.5rem;
            row-gap: 4rem;
        }

        .link-container {
            column-gap: 1rem;

            text-decoration: none;

            &:nth-child(3n + 1) {
                @include col-start(2);
                @include col(12);

                & {
                    grid-template-columns: repeat(12, 1fr);
                }
            }

            &:nth-child(3n + 2) {
                @include col-start(2);
                @include col(12);

                & {
                    margin: 0;

                    grid-template-columns: repeat(12, 1fr);
                }
            }

            &:nth-child(3n) {
                @include col-start(2);
                @include col(12);

                & {
                    margin: 0;

                    grid-template-columns: repeat(12, 1fr);
                }
            }
        }

        .link-container:nth-child(3n + 1) .title {
            @include col-start(2);
            @include col(9);
        }

        .link-container:nth-child(3n + 2) .title {
            @include col-start(3);
            @include col(9);
        }

        .link-container:nth-child(3n) .title {
            @include col-start(1);
            @include col(5);
        }

        .image-container {
            margin-top: 1.6rem;
        }

        .link-container:nth-child(3n + 1) .image-container {
            @include col-start(1);
            @include col(11);
        }

        .link-container:nth-child(3n + 2) .image-container {
            @include col-start(4);
            @include col(9);
        }

        .link-container:nth-child(3n) .image-container {
            @include col-start(2);
            @include col(10);
        }
    }
</style>
