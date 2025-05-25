<template>
    <section class="contentelement_herobig" ref="heroLarge">
        <div v-if="data.title" class="content-container grid-container">
            <h1 class="title">{{ data.title }}</h1>
        </div>
        <StrapiImage v-if="data.image" :image="data.image" scale-animation />
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import type { StrapiImage } from '../elements/StrapiImage.vue';

    interface Image {
        src: string;
        alt: string;
    }

    interface HeroLargeData {
        title?: string;
        image?: StrapiImage;
    }

    interface HeroLargeSettings {}

    export interface HeroLargeProps {
        data: HeroLargeData;
        settings?: HeroLargeSettings;
    }

    const props = defineProps<HeroLargeProps>();

    const heroLarge = ref<HTMLElement>();

    onMounted(() => {
        if (heroLarge.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(heroLarge);
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

        :deep(.image) {
            width: 100%;
            height: auto;
        }
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
