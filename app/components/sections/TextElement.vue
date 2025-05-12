<template>
    <section class="contentelement_textelement grid-container">
        <h2 class="title">{{ title }}</h2>
        <div class="content" v-html="text"></div>
        <NuxtLink class="link-button" :to="link?.href">{{ link?.text }}</NuxtLink>
    </section>
</template>

<script lang="ts" setup>
interface Link {
    href: string;
    text: string;
}

export interface TextElementProps {
    title: string;
    text: string;
    link: Link;
}

const props = defineProps<TextElementProps>();
</script>

<style lang="scss" scoped>
.title {
    @include col-start(3);
    @include col(6);

    & {
        margin-bottom: 7.5rem;
    }
}

.content {
    @include col-start(6);
    @include col(6);

    & {
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
</style>
