<template>
    <NuxtImg
        v-if="image?.url"
        :src="imageUrl"
        :alt="image.alt || 'Image'"
        :width="width"
        :height="height"
        :class="imageClass"
        :loading="loading"
        :format="format"
        :quality="quality"
        :sizes="responsiveSizes"
        :placeholder="placeholder"
    />
</template>

<script lang="ts" setup>
    const runtimeConfig = useRuntimeConfig();

    export interface ImageProps {
        image: DashboardImage;
        width?: number;
        height?: number;
        class?: string;
        loading?: 'lazy' | 'eager';
        format?: 'avif' | 'webp' | 'jpeg' | 'jpg' | 'png';
        quality?: number;
        sizes?: string;
        placeholder?: boolean | number | [number, number, number, number];
    }

    const props = withDefaults(defineProps<ImageProps>(), {
        loading: 'lazy',
        format: 'webp',
        quality: 80,
        sizes: '(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px',
        placeholder: false,
    });

    const imageUrl = computed(() => {
        if (!props.image?.url) return '';
        if (props.image.url.startsWith('http')) {
            return props.image.url;
        }
        return runtimeConfig.public.payloadApiUrl + props.image.url;
    });

    const imageClass = computed(() => props.class);

    const responsiveSizes = computed(() => props.sizes);
</script>
