<template>
    <section class="contentelement_highlightedlinks grid-container">
        <NuxtLink
            :to="imageLink.link.href"
            class="link-container"
            v-for="(imageLink, index) in data.imageLinks"
            :key="index"
            :target="imageLink.link.target ?? '_self'"
        >
            <div
                class="inner-container scale-animation"
                ref="highlightedLinkElements"
                :class="{ 'scale-active': showHighlightedLinkElements[index] }"
            >
                <span class="title">{{ imageLink.link.text }}</span>
                <StrapiImage :image="imageLink.image" />
            </div>
        </NuxtLink>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface Link {
        href: string;
        text: string;
        target?: string;
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

    const highlightedLinkElements = ref<Array<HTMLElement>>([]);
    const showHighlightedLinkElements = ref<Array<boolean>>([]);
    onMounted(() => {
        // Initialize visibility array with false values
        showHighlightedLinkElements.value = Array(highlightedLinkElements?.value?.length).fill(false);

        // Set up scale effect for each element
        highlightedLinkElements?.value?.forEach((element, index) => {
            const scaleEffect = getScaleEffect(gsap);
            const elementRef = ref(element);

            const elementShowRef = computed({
                get: () => showHighlightedLinkElements.value[index],
                set: (value) => {
                    showHighlightedLinkElements.value[index] = value;
                },
            });

            scaleEffect(elementRef, elementShowRef);
        });
    });
</script>

<style lang="scss" scoped>
    .contentelement_highlightedlinks {
        margin-bottom: 15rem;
    }

    .link-container {
        text-decoration: none;

        &:nth-child(3n + 1) {
            @include col-start(2);
            @include col(6);
        }

        &:nth-child(3n + 2) {
            @include col-start(9);
            @include col(5);

            & {
                margin-top: 35rem;
            }
        }

        &:nth-child(3n) {
            @include col-start(3);
            @include col(6);

            & {
                margin-top: -20rem;
            }
        }
    }

    .inner-container {
        height: fit-content;

        display: grid;
        column-gap: 4.5rem;

        &:hover {
            :deep(img) {
                scale: 1.2;
            }
        }
    }

    .link-container:nth-child(3n + 1) .inner-container {
        grid-template-columns: repeat(6, 1fr);
    }

    .link-container:nth-child(3n + 2) .inner-container {
        grid-template-columns: repeat(5, 1fr);
    }

    .link-container:nth-child(3n) .inner-container {
        grid-template-columns: repeat(6, 1fr);
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

        overflow: hidden;
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
            text-decoration: none;

            &:nth-child(3n + 1) {
                @include col-start(2);
                @include col(12);
            }

            &:nth-child(3n + 2) {
                @include col-start(2);
                @include col(12);

                & {
                    margin: 0;
                }
            }

            &:nth-child(3n) {
                @include col-start(2);
                @include col(12);

                & {
                    margin: 0;
                }
            }
        }

        .inner-container {
            column-gap: 1rem;
        }

        .link-container:nth-child(3n + 1) .inner-container {
            grid-template-columns: repeat(12, 1fr);
        }

        .link-container:nth-child(3n + 2) .inner-container {
            grid-template-columns: repeat(12, 1fr);
        }

        .link-container:nth-child(3n) .inner-container {
            grid-template-columns: repeat(12, 1fr);
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
