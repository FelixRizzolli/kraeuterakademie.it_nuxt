<template>
    <section class="contentelement_herobig" ref="heroBig">
        <div v-if="title" class="content-container grid-container">
            <h1 class="title">{{ title }}</h1>
        </div>
        <div v-if="image" class="image-container">
            <img :src="image.src" :alt="image.alt" class="image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Image {
    src: string;
    alt: string;
}

export interface HeroBigProps {
    title?: string;
    image?: Image;
}

const props = defineProps<HeroBigProps>();

const heroBig = ref<HTMLElement>();

onMounted(() => {
    if (heroBig.value) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(heroBig);
    }
});
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

@media (max-width: 1023px) {
    .contentelement_herobig {
        margin-bottom: 7.5rem;
        padding: 0;
    }

    .content-container {
        margin-bottom: -2rem;
    }

    .title {
        @include col-start(2);
        @include col(12);
    }

    .image-container {
        margin: 0;
    }
}
</style>
