<template>
    <section class="contentelement_booklist grid-container">
        <h2 v-if="data.title" class="title" ref="titleElement">{{ data.title }}</h2>
        <div class="books">
            <Book v-for="(book, index) in data.books" :key="index" :book="book" />
        </div>
    </section>
</template>

<script lang="ts" setup>
    interface BookListData {
        title: string;
        books: Array<any>;
    }

    interface BookListSettings {
        default: string;
    }

    export interface BookListProps {
        data: BookListData;
        settings?: BookListSettings;
    }

    const props = defineProps<BookListProps>();

    onMounted(() => {
        console.log('BookList mounted with data:', props.data);
    });
</script>

<style lang="scss" scoped></style>
