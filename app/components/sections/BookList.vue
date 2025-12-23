<template>
    <SectionElement
        class="contentelement_booklist grid-container"
        :spacing="settings?.spacing"
        :style="settings?.bookListStyle"
    >
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div class="books grid-container">
            <Book v-for="(book, index) in data.books" :key="index" :book="book" />
        </div>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface BookListData {
        title: string;
        books: Array<any>;
    }

    interface BookListSettings {
        spacing: Spacing;
        bookListStyle: string;
    }

    export interface BookListProps {
        data: BookListData;
        settings: BookListSettings;
    }

    const props = defineProps<BookListProps>();

    const titleElement = ref<HTMLElement | null>(null);
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (titleElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(titleElement);
        }
    });
</script>

<style lang="scss" scoped>
    .contentelement_booklist {
        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;
    }

    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();
    }

    .books {
        @include col-start(1);
        @include col(14);

        & {
            padding-top: 6rem;
            row-gap: 9rem;
        }

        .book:nth-child(4n + 1) {
            @include col-start(5);
            @include col(4);

            & {
                padding-top: 15rem;
            }
        }

        .book:nth-child(4n + 2) {
            @include col-start(10);
            @include col(4);
        }

        .book:nth-child(4n + 3) {
            @include col-start(3);
            @include col(4);
        }

        .book:nth-child(4n) {
            @include col-start(9);
            @include col(4);

            & {
                padding-top: 15rem;
            }
        }
    }

    @media (max-width: 1023px) {
        .title {
            @include col-start(3);
            @include col(11);
        }

        .books {
            padding-top: 4.5rem;
            row-gap: 6rem;

            .book:nth-child(4n + 1) {
                @include col-start(2);
                @include col(10);

                & {
                    padding-top: 0;
                }
            }

            .book:nth-child(4n + 2) {
                @include col-start(3);
                @include col(10);
            }

            .book:nth-child(4n + 3) {
                @include col-start(2);
                @include col(10);
            }

            .book:nth-child(4n) {
                @include col-start(4);
                @include col(10);

                & {
                    padding-top: 0;
                }
            }
        }
    }
</style>
