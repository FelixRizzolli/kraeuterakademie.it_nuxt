<template>
    <div
        v-if="image"
        class="image-container"
        ref="imageElement"
        :class="{ 'scale-active': showImageElement && scaleAnimation, 'scale-animation': scaleAnimation }"
    >
        <img class="image" :src="fileURL" :alt="image.alternativeText ?? 'Image'" />
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    const runtimeConfig = useRuntimeConfig();

    export interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    export interface StrapiImageProps {
        image: StrapiImage;
        scaleAnimation?: boolean;
    }

    const props = defineProps<StrapiImageProps>();

    const fileURL = computed(() => {
        return runtimeConfig.public.strapiApiUrl + props.image.url;
    });

    const imageElement = ref<HTMLElement>();
    const showImageElement = ref(false);

    onMounted(() => {
        if (imageElement.value instanceof HTMLElement && props.scaleAnimation) {
            const effectForImage = getScaleEffect(gsap);
            effectForImage(imageElement, showImageElement);
        }
    });
</script>

<style lang="scss" scoped>
    .image {
        @include transition();

        & {
            width: 100%;
            height: auto;
        }
    }
</style>
