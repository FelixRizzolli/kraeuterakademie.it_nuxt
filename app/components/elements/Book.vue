<template>
    <div class="book">
        <StrapiImage :image="book.image" />
        <StrapiBlocksText :nodes="book.infos" />
        <h3 class="title"></h3>
        <StrapiBlocksText :nodes="book.description" />
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

<style lang="scss" scoped></style>
