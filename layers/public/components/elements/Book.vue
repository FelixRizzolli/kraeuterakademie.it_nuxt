<template>
    <div class="book scale-animation" :class="{ 'scale-active': showBookElement }" ref="bookElement">
        <ResponsiveImage :image="book.image" />
        <div class="infos-container">
            <LexicalRenderer class="infos" :nodes="book.infos" />
        </div>
        <h3 class="title">{{ book.title }}</h3>
        <div class="description-container">
            <div class="description truncate" ref="descriptionElement">
                <LexicalRenderer class="description" :nodes="book.description" />
            </div>
            <button class="more" @click="toggleTruncate">{{ moreTextBlock }}</button>
        </div>
        <NuxtLink
            v-if="book.link && book.link.text && book.link.href"
            class="link-button"
            :to="book.link.href || '/'"
            :target="book.link.target ?? '_self'"
            >{{ book.link.text }}</NuxtLink
        >
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    const { isMobile } = useDevice();

    interface Book {
        image: PublicImage;
        infos: any;
        title: string;
        description: any;
        link: Link;
    }

    interface BookProps {
        book: Book;
    }

    const props = defineProps<BookProps>();

    const bookElement = ref<HTMLElement | null>(null);
    const showBookElement = ref(false);

    let ctx: any;
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {});

        if (bookElement.value instanceof HTMLElement) {
            const effectForBook = getScaleEffect(gsap);
            effectForBook(bookElement, showBookElement);
        }
    });

    const truncated = ref(true);
    const descriptionElement = ref<HTMLElement | null>(null);
    const toggleTruncate = () => {
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
                height: isMobile ? '10.8rem' : '9rem',
            },
            {
                height: descriptionElement.value?.scrollHeight + 'px',
                duration: 0.8,
                ease: 'power2.out',
                onStart: () => {
                    descriptionElement.value?.classList.remove('truncate');
                },
                onComplete: () => {
                    ScrollTrigger.refresh();
                },
            },
        );
    };

    const closeDescription = () => {
        truncated.value = true;
        gsap.to(descriptionElement.value, {
            height: isMobile ? '10.8rem' : '9rem',
            duration: 0.8,
            ease: 'power2.out',
            onComplete: () => {
                ScrollTrigger.refresh();
                descriptionElement.value?.classList.add('truncate');
            },
        });
    };

    const moreTextBlock = ref<string | undefined | null>();
    onMounted(() => {
        moreTextBlock.value = useTextBlock('description-more-linktext');
    });
</script>

<style lang="scss" scoped>
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .infos-container {
        margin-top: 2.5rem;
    }

    .title {
        margin-top: 4.5rem;
    }

    .description-container {
        margin-top: 1.5rem;

        .description {
            height: 9rem;
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
                height: 10.8rem;
            }
        }

        .link-button {
            margin-top: 2.5rem;
        }
    }
</style>
