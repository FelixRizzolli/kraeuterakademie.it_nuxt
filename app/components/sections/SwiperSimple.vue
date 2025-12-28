<template>
    <SectionElement
        class="contentelement_swipersimple grid-container"
        :spacing="settings?.spacing"
        :style="settings?.swiperSimpleStyle"
    >
        <h2 class="title" ref="titleElement">{{ data.title }}</h2>

        <div class="swiper-wrapper" ref="swiperWrapperElement">
            <ClientOnly>
                <swiper-container ref="swiperContainer" class="swiper-container">
                    <swiper-slide v-for="(image, idx) in data.images" :key="idx" class="swiper-slide">
                        <MediaElement v-if="image" :media="image" ref="imageElement" />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>

        <div class="swiper-pagination" ref="swiperPaginationElement">
            <!-- Go back one slide -->
            <button @click="swiper.prev()" class="prev-button">
                <i-arrow-prev class="icon" />
            </button>
            <!-- Go forward one slide -->
            <button @click="swiper.next()" class="next-button">
                <i-arrow-next class="icon" />
            </button>
        </div>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface SwiperSimpleData {
        title?: string;
        images: Array<WebImages>;
    }

    interface SwiperSimpleSettings {
        spacing: Spacing;
        swiperSimpleStyle: string;
    }

    export interface SwiperSimpleProps {
        data: SwiperSimpleData;
        settings: SwiperSimpleSettings;
    }

    const props = defineProps<SwiperSimpleProps>();

    const imageElement = ref<HTMLElement | null>(null);
    const swiperContainer = ref(null);
    const swiper = useSwiper(swiperContainer, {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 2.11,
                spaceBetween: 45,
            },
        },
    });

    const titleElement = ref<HTMLElement | null>(null);
    const swiperWrapperElement = ref<HTMLElement | null>(null);
    const swiperPaginationElement = ref<HTMLElement | null>(null);
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (titleElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(titleElement);
        }

        if (swiperWrapperElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(swiperWrapperElement);
        }

        if (swiperPaginationElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(swiperPaginationElement);
        }
    });
</script>

<style lang="scss" scoped>
    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();
    }

    .swiper-wrapper {
        @include col-start(2);
        @include col(13);

        & {
            margin-top: 7.5rem;
        }
    }

    .swiper-pagination {
        @include col-start(2);
        @include col(12);

        & {
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
        }
    }

    .prev-button,
    .next-button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    .icon {
        height: 2rem;
        width: auto;
    }

    @media (max-width: 1023px) {
        .title {
            @include col-start(3);
            @include col(11);
        }

        .swiper-wrapper {
            margin-top: 4.5rem;
        }

        .swiper-pagination {
            margin-top: 1rem;
        }
    }
</style>
