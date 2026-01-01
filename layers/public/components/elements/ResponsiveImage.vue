<template>
    <div
        v-if="image"
        class="image-container"
        ref="imageElement"
        :class="{ 'scale-active': showImageElement && scaleAnimation, 'scale-animation': scaleAnimation }"
    >
        <picture v-if="image.sizes && hasValidSizes">
            <!-- AVIF format for modern browsers -->
            <source
                v-if="avifSrcset"
                :srcset="avifSrcset"
                sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
                type="image/avif"
            />
            <!-- WebP format for wider browser support -->
            <source
                v-if="webpSrcset"
                :srcset="webpSrcset"
                sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
                type="image/webp"
            />
            <!-- JPEG fallback for all browsers -->
            <source
                v-if="jpegSrcset"
                :srcset="jpegSrcset"
                sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
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
        image: PublicImage;
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

    const buildSrcset = (sizes: { url?: Maybe<string>; width: number }[]) => {
        return sizes
            .filter((size) => size.url)
            .map((size) => `${getImageURL(size.url)} ${size.width}w`)
            .join(', ');
    };

    const avifSrcset = computed(() => {
        if (!props.image?.sizes) return '';
        return buildSrcset([
            { url: props.image.sizes.mobile_avif?.url, width: 768 },
            { url: props.image.sizes.tablet_avif?.url, width: 1024 },
            { url: props.image.sizes.desktop_avif?.url, width: 1920 },
        ]);
    });

    const webpSrcset = computed(() => {
        if (!props.image?.sizes) return '';
        return buildSrcset([
            { url: props.image.sizes.mobile_webp?.url, width: 768 },
            { url: props.image.sizes.tablet_webp?.url, width: 1024 },
            { url: props.image.sizes.desktop_webp?.url, width: 1920 },
        ]);
    });

    const jpegSrcset = computed(() => {
        if (!props.image?.sizes) return '';
        return buildSrcset([
            { url: props.image.sizes.mobile_jpeg?.url, width: 768 },
            { url: props.image.sizes.tablet_jpeg?.url, width: 1024 },
            { url: props.image.sizes.desktop_jpeg?.url, width: 1920 },
        ]);
    });

    const hasValidSizes = computed(() => {
        return !!(avifSrcset.value || webpSrcset.value || jpegSrcset.value);
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
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .image {
        @include transition();

        & {
            width: 100%;
            height: auto;
            display: block;
        }
    }
</style>
