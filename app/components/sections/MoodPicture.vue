<template>
    <SectionElement class="contentelement_moodpicture" :spacing="settings?.spacing">
        <MediaElement v-if="data.image" :media="data.image" scale-animation />
    </SectionElement>
</template>

<script lang="ts" setup>
    interface Image {
        src: string;
        alt: string;
    }

    interface MoodPictureData {
        image: WebMedia;
    }

    interface MoodPictureSettings {
        spacing: Spacing;
    }

    export interface MoodPictureProps {
        data: MoodPictureData;
        settings: MoodPictureSettings;
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
