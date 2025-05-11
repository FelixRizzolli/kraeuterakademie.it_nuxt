<template>
    <section class="contentelement_herobig">
        <div class="image-container">
            <img :src="image?.src" :alt="image?.alt" class="image" />
        </div>
        <div class="content-container grid-container">
            <h1 class="title">{{ title }}</h1>
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Image {
    src: string;
    alt: string;
}

export interface HeroBigProps {
    title: string;
    image: Image;
}

const props = defineProps<HeroBigProps>();
</script>

<style lang="scss" scoped>
.contentelement_herobig {
    padding-top: 30rem;
}

.title {
    @include col-start(3);
    @include col(6);

    & {
        z-index: 1;

        text-align: right;
    }
}

.image-container {
    position: relative;
    margin-left: 21rem;
}

.image {
    margin-top: 3.5rem;
    position: absolute;
    width: 100%;
    height: auto;
}
</style>
