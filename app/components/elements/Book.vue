<template>
    <div class="book">
        <StrapiImage :image="book.image" />
        <div class="infos-container">
            <StrapiBlocksText class="infos" :nodes="book.infos" />
        </div>
        <h3 class="title">{{ book.title }}</h3>
        <div class="description-container">
            <div class="description truncate" ref="descriptionElement">
                <StrapiBlocksText class="description" :nodes="book.description" />
            </div>
            <button class="more" @click="toggleTruncate">weiterlesen</button>
        </div>
        <NuxtLink v-if="book.link" class="link-button" :to="book.link.href">{{ book.link.text }}</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    const { isMobile } = useDevice();

    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface Link {
        href: string;
        text: string;
    }

    interface Book {
        image: StrapiImage;
        infos: any;
        title: string;
        description: any;
        link: Link;
    }

    interface BookProps {
        book: Book;
    }

    const props = defineProps<BookProps>();

    let ctx: any;
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {});
    });

    const truncated = ref(true);
    const descriptionElement = ref<HTMLElement | null>(null);
    const toggleTruncate = () => {
        descriptionElement.value.classList.toggle('truncate', truncated.value);
        if (truncated.value) {
            openDescription();
        } else {
            closeDescription();
        }
    };

    const openDescription = () => {
        truncated.value = false;
        gsap.fromTo(
            descriptionElement.value,
            {
                height: isMobile ? '9rem' : '6rem',
            },
            {
                height: descriptionElement.value?.scrollHeight + 'px',
                duration: 0.8,
                ease: 'power2.out',
                onComplete: () => {
                    ScrollTrigger.refresh();
                },
            },
        );
    };

    const closeDescription = () => {
        truncated.value = true;
        gsap.to(descriptionElement.value, {
            height: isMobile ? '9rem' : '6rem',
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                ScrollTrigger.refresh();
            },
        });
    };
</script>

<style lang="scss" scoped>
    .infos-container {
        margin-top: 2.5rem;
    }

    .title {
        margin-top: 4.5rem;
    }

    .description-container {
        margin-top: 1.5rem;

        .description {
            height: 6rem;
            overflow: hidden;
        }

        .truncate {
            text-overflow: ellipsis;
            display: -webkit-box;
            line-clamp: 3;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
    }

    .link-button {
        margin-top: 4.5rem;
    }

    .more {
        @include fontSizeText();

        & {
            display: inline;
            border: 0;

            color: $colorFontWhite;
            background-color: transparent;

            cursor: pointer;
            text-decoration: underline;
        }
    }

    @media (max-width: 1023px) {
        .infos-container {
            margin-top: 1rem;
        }

        .title {
            margin-top: 2.5rem;
        }

        .description-container {
            margin-top: 1rem;

            .truncate {
                line-clamp: 4;
                -webkit-line-clamp: 4;
            }

            .description {
                height: 9rem;
            }
        }

        .link-button {
            margin-top: 2.5rem;
        }
    }
</style>
