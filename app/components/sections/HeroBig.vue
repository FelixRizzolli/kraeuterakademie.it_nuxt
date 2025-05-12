<template>
    <section class="contentelement_herobig">
        <div class="content-container grid-container">
            <h1 class="title">{{ title }}</h1>
        </div>
        <div class="image-container">
            <img :src="image?.src" :alt="image?.alt" class="image" />
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
    margin-bottom: 15rem;
    padding-top: 30rem;
}

.content-container {
    margin-bottom: -3.5rem;
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
    margin-left: 21rem;
}

.image {
    width: 100%;
    height: auto;
}
</style>
