<template>
    <h2>{{ data.title }}</h2>
    <ClientOnly>
        <swiper-container ref="swiperContainer">
            <swiper-slide v-for="(image, idx) in data.images" :key="idx">
                <StrapiImage v-if="image" :image="image" ref="imageElement" />
            </swiper-slide>
        </swiper-container>
    </ClientOnly>

    <!-- Go back one slide -->
    <button @click="swiper.prev()">Prev</button>
    <!-- Go forward one slide -->
    <button @click="swiper.next()">Next</button>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface SwiperSimpleData {
        title?: string;
        images: Array<StrapiImage>;
    }

    interface SwiperSimpleSettings {
        default: string;
    }

    export interface SwiperSimpleProps {
        data: SwiperSimpleData;
        settings?: SwiperSimpleSettings;
    }

    const props = defineProps<SwiperSimpleProps>();

    const imageElement = ref<HTMLElement | null>(null);
    const swiperContainer = ref(null);
    const swiper = useSwiper(swiperContainer);
    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_swipersimple {
        margin-bottom: 15rem;
    }

    @media (max-width: 1023px) {
        .contentelement_swipersimple {
            margin: 7.5rem;
        }
    }
</style>
