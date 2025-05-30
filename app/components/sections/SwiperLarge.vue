<template>
    <section class="contentelement_swiperlarge grid-container">
        <h2>{{ data.title }}</h2>
        <ClientOnly>
            <swiper-container ref="swiperContainer">
                <swiper-slide v-for="(item, idx) in data.items" :key="idx">
                    <SwiperLargeItem v-if="item" :data="item" ref="itemElement" />
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

    const props = defineProps<SwiperLargeProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_swiperlarge {
        margin-bottom: 15rem;
    }

    @media (max-width: 1023px) {
        .contentelement_swiperlarge {
            margin: 7.5rem;
        }
    }
</style>
