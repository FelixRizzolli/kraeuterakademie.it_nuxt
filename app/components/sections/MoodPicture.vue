<template>
    <SectionElement class="contentelement_moodpicture" :spacing="settings?.spacing">
        <StapiImage v-if="data.image" :image="data.image" scale-animation />
    </SectionElement>
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

    interface MoodPictureSettings {
        spacing?: any;
    }

    export interface MoodPictureProps {
        data: MoodPictureData;
        settings?: MoodPictureSettings;
    }

    const props = defineProps<MoodPictureProps>();
</script>

<style lang="scss" scoped>
    .image-container {
        margin-left: 21rem;

        :deep(.image) {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 1023px) {
    }
</style>
