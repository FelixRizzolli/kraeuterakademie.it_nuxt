<template>
    <section class="contentelement_moodpicture">
        <div class="image-container">
            <img :src="data.image?.src" :alt="data.image?.alt" class="image" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Image {
    src: string;
    alt: string;
}

interface MoodPictureData {
    image: Image;
}

interface MoodPictureSettings {}

export interface MoodPictureProps {
    data: MoodPictureData;
    settings?: MoodPictureSettings;
}

const props = defineProps<MoodPictureProps>();

const imageElement = ref<HTMLElement>();

onMounted(() => {
    if (imageElement.value instanceof HTMLElement) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(imageElement);
    }
});
</script>

<style lang="scss" scoped>
.image-container {
    margin-bottom: 15rem;
    margin-left: 21rem;
}

.image {
    width: 100%;
    height: auto;
}

@media (max-width: 1023px) {
    .image-container {
        margin: 0;
    }
}
</style>
