<template>
    <section class="contentelement_moodpicture">
        <div class="image-container">
            <img :src="image?.src" :alt="image?.alt" class="image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
interface Image {
    src: string;
    alt: string;
}

export interface MoodPictureProps {
    image: Image;
}

const props = defineProps<MoodPictureProps>();
</script>

<style lang="scss" scoped>
.image-container {
    margin-left: 21rem;
}

.image {
    width: 100%;
    height: auto;
}
</style>
