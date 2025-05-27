<template>
    <div class="book">
        <StrapiImage :image="book.image" />
        <div class="infos-container">
            <StrapiBlocksText class="infos" :nodes="book.infos" />
        </div>
        <h3 class="title">{{ book.title }}</h3>
        <div class="description-container">
            <StrapiBlocksText class="description" :nodes="book.description" />
        </div>
        <NuxtLink v-if="book.link" class="link-button" :to="book.link.href">{{ book.link.text }}</NuxtLink>
    </div>
</template>

<script lang="ts" setup>
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
    }

    .link-button {
        margin-top: 4.5rem;
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
        }

        .link-button {
            margin-top: 2.5rem;
        }
    }
</style>
