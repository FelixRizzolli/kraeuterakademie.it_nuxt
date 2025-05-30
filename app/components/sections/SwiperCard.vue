<template>
    <section class="contentelement_swipercard grid-container">
        <h2>{{ data.title }}</h2>
        <ClientOnly>
            <swiper-container ref="swiperContainer">
                <swiper-slide v-for="(card, idx) in data.cards" :key="idx">
                    <SwiperCardItem v-if="card" :data="card" ref="cardElement" />
                </swiper-slide>
            </swiper-container>
        </ClientOnly>

        <!-- Go back one slide -->
        <button @click="swiper.prev()">Prev</button>
        <!-- Go forward one slide -->
        <button @click="swiper.next()">Next</button>
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
    const swiper = useSwiper(swiperContainer);
    const props = defineProps<SwiperCardProps>();

    onMounted(() => {
        console.log('SwiperCard mounted with data:', props.data);
    });
</script>

<style lang="scss" scoped>
    .contentelement_swipercard {
        margin-bottom: 15rem;
    }

    @media (max-width: 1023px) {
        .contentelement_swipercard {
            margin: 7.5rem;
        }
    }
</style>
