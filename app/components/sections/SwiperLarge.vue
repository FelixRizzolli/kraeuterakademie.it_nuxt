<template>
    <section class="contentelement_swiperlarge grid-container">
        <h2 class="title">{{ data.title }}</h2>

        <!-- Go back one slide -->
        <button @click="swiper.prev()" class="prev-button">
            <i-arrow-prev class="icon" />
        </button>

        <div class="swiper-wrapper">
            <ClientOnly>
                <swiper-container ref="swiperContainer" class="swiper-container">
                    <swiper-slide v-for="(item, idx) in data.items" :key="idx" class="swiper-slide">
                        <SwiperLargeItem v-if="item" :data="item" ref="itemElement" />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>

        <!-- Go forward one slide -->
        <button @click="swiper.next()" class="next-button">
            <i-arrow-next class="icon" />
        </button>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface SwiperLargeData {
        title?: string;
        items: Array<any>;
    }

    interface SwiperLargeSettings {
        default?: string;
    }

    export interface SwiperLargeProps {
        data: SwiperLargeData;
        settings?: SwiperLargeSettings;
    }

    const swiperContainer = ref(null);
    const swiper = useSwiper(swiperContainer, {
        loop: true,
        slidesPerView: 1,
    });
    const props = defineProps<SwiperLargeProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_swiperlarge {
        margin-bottom: 15rem;
        padding: 15rem 0;

        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;
    }

    .title {
        @include col-start(6);
        @include col(7);
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
        .contentelement_swiperlarge {
            margin-bottom: 7.5rem;
        }
    }
</style>
