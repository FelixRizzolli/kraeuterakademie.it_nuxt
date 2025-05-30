<template>
    <section class="contentelement_swipercard grid-container">
        <h2 class="title">{{ data.title }}</h2>

        <!-- Go back one slide -->
        <button @click="swiper.prev()" class="prev-button">
            <i-arrow-prev class="icon" />
        </button>

        <div class="swiper-wrapper">
            <ClientOnly>
                <swiper-container ref="swiperContainer" class="swiper-container">
                    <swiper-slide v-for="(card, idx) in data.cards" :key="idx" class="swiper-slide">
                        <SwiperCardItem v-if="card" :data="card" ref="cardElement" />
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

    interface SwiperCardData {
        title?: string;
        cards: Array<any>;
    }

    interface SwiperCardSettings {}

    export interface SwiperCardProps {
        data: SwiperCardData;
        settings?: SwiperCardSettings;
    }

    const cardElement = ref<HTMLElement | null>(null);
    const swiperContainer = ref(null);
    const swiper = useSwiper(swiperContainer, {
        loop: true,
        slidesPerView: 1.5,
        spaceBetween: '1rem',
        breakpoints: {
            1024: {
                slidesPerView: 2.5,
                spaceBetween: '45rem',
            },
        },
    });
    const props = defineProps<SwiperCardProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_swipercard {
        margin-bottom: 15rem;
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

    @media (max-width: 1023px) {
        .contentelement_swipercard {
            margin: 7.5rem;
        }
    }
</style>
