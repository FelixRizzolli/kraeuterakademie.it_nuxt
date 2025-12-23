<template>
    <SectionElement
        class="contentelement_swiperlarge grid-container"
        :spacing="settings?.spacing"
        :style="settings?.swiperLargeStyle"
    >
        <h2 class="title" ref="titleElement">{{ data.title }}</h2>

        <!-- Go back one slide -->
        <button @click="swiper.prev()" class="prev-button" ref="prevButtonElement">
            <i-arrow-prev class="icon" />
        </button>

        <div class="swiper-wrapper" ref="swiperWrapperElement">
            <ClientOnly>
                <swiper-container ref="swiperContainer" class="swiper-container">
                    <swiper-slide v-for="(item, idx) in data.items" :key="idx" class="swiper-slide">
                        <SwiperLargeItem v-if="item" :data="item" ref="itemElement" />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>

        <!-- Go forward one slide -->
        <button @click="swiper.next()" class="next-button" ref="nextButtonElement">
            <i-arrow-next class="icon" />
        </button>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface SwiperLargeData {
        title?: string;
        items: Array<any>;
    }

    interface SwiperLargeSettings {
        spacing: Spacing;
        swiperLargeStyle: string;
    }

    export interface SwiperLargeProps {
        data: SwiperLargeData;
        settings: SwiperLargeSettings;
    }

    const swiperContainer = ref(null);
    const swiper = useSwiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
    });
    const props = defineProps<SwiperLargeProps>();

    const titleElement = ref<HTMLElement | null>(null);
    const swiperWrapperElement = ref<HTMLElement | null>(null);
    const prevButtonElement = ref<HTMLElement | null>(null);
    const nextButtonElement = ref<HTMLElement | null>(null);
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

        if (prevButtonElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(prevButtonElement);
        }

        if (nextButtonElement.value instanceof HTMLElement) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(nextButtonElement);
        }
    });
</script>

<style lang="scss" scoped>
    .contentelement_swiperlarge {
        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;
    }

    .title {
        @include col-start(6);
        @include col(7);

        @include wordbreak();
    }

    .swiper-wrapper {
        @include col-start(3);
        @include col(10);

        & {
            margin-top: 6rem;
        }
    }

    .prev-button,
    .next-button {
        margin-bottom: 22rem;

        background: transparent;
        border: none;
        cursor: pointer;

        display: flex;
    }

    .prev-button {
        @include col-start(2);
        @include col(1);

        & {
            justify-content: flex-start;
            align-items: end;
        }
    }

    .next-button {
        @include col-start(13);
        @include col(1);

        & {
            justify-content: flex-end;
            align-items: end;
        }
    }

    .icon {
        height: 2rem;
        width: auto;
    }

    :deep(svg) {
        path {
            stroke: $colorFontWhite;
        }
    }

    @media (max-width: 1023px) {
        .title {
            @include col-start(3);
            @include col(11);
        }

        .swiper-wrapper {
            @include col-start(2);
            @include col(12);

            & {
                order: 1;
                margin: 4.5rem 0 0 0;
            }
        }

        .prev-button {
            @include col-start(2);
            @include col(6);

            & {
                order: 2;
                margin: 1rem 0 0 0;
            }
        }

        .next-button {
            @include col-start(8);
            @include col(6);

            & {
                order: 3;
                margin: 1rem 0 0 0;
            }
        }
    }
</style>
