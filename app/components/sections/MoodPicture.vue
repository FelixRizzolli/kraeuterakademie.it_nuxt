<template>
    <section class="contentelement_moodpicture">
        <StapiImage v-if="data.image" :image="data.image" scale-animation />
    </section>
</template>

<script lang="ts" setup>
    import type { StrapiImage } from '../elements/StrapiImage.vue';

    interface Image {
        src: string;
        alt: string;
    }

    interface MoodPictureData {
        image: StrapiImage;
    }

    interface MoodPictureSettings {}

    export interface MoodPictureProps {
        data: MoodPictureData;
        settings?: MoodPictureSettings;
    }

    const props = defineProps<MoodPictureProps>();
</script>

<style lang="scss" scoped>
    .image-container {
        margin-bottom: 15rem;
        margin-left: 21rem;

        :deep(.image) {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 1023px) {
        .image-container {
            margin-bottom: 7.5rem;
        }
    }
</style>
