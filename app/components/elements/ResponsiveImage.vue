<template>
    <div
        v-if="image"
        class="image-container"
        ref="imageElement"
        :class="{ 'scale-active': showImageElement && scaleAnimation, 'scale-animation': scaleAnimation }"
    >
        <picture v-if="image.sizes">
            <!-- AVIF format for modern browsers -->
            <source
                :srcset="`${getImageURL(image.sizes.mobile_avif?.url)} 640w, ${getImageURL(image.sizes.tablet_avif?.url)} 1024w, ${getImageURL(image.sizes.desktop_avif?.url)} 1920w`"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                type="image/avif"
            />
            <!-- WebP format for wider browser support -->
            <source
                :srcset="`${getImageURL(image.sizes.mobile_webp?.url)} 640w, ${getImageURL(image.sizes.tablet_webp?.url)} 1024w, ${getImageURL(image.sizes.desktop_webp?.url)} 1920w`"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                type="image/webp"
            />
            <!-- JPEG fallback for all browsers -->
            <source
                :srcset="`${getImageURL(image.sizes.mobile_jpeg?.url)} 640w, ${getImageURL(image.sizes.tablet_jpeg?.url)} 1024w, ${getImageURL(image.sizes.desktop_jpeg?.url)} 1920w`"
                sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                type="image/jpeg"
            />
            <!-- Fallback img tag -->
            <img class="image" :src="getImageURL(image.url) || ''" :alt="image.alt || 'Image'" loading="lazy" />
        </picture>
        <img v-else class="image" :src="getImageURL(image.url) || ''" :alt="image.alt || 'Image'" loading="lazy" />
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    const runtimeConfig = useRuntimeConfig();

    export interface ResponsiveImageProps {
        image: WebImage;
        scaleAnimation?: boolean;
    }

    const props = defineProps<ResponsiveImageProps>();

    const getImageURL = (url: Maybe<string> | undefined) => {
        if (!url) return '';
        if (url.startsWith('http')) {
            return url;
        }
        return runtimeConfig.public.payloadApiUrl + url;
    };

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
            display: block;
        }
    }
</style>
