<template>
    <SectionElement class="contentelement_herobig" ref="heroLarge" :spacing="settings?.spacing">
        <div v-if="data.title" class="content-container grid-container">
            <h1 class="title">{{ data.title }}</h1>
        </div>
        <MediaElement v-if="data.image" :media="data.image" scale-animation />
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface Image {
        src: string;
        alt: string;
    }

    interface HeroLargeData {
        title?: string;
        image?: WebImages;
    }

    interface HeroLargeSettings {
        spacing: Spacing;
    }

    export interface HeroLargeProps {
        data: HeroLargeData;
        settings: HeroLargeSettings;
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
        padding-top: 30rem;
    }

    .content-container {
        margin-bottom: -3.5rem;
    }

    .title {
        @include col-start(3);
        @include col(6);

        @include wordbreak();

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
