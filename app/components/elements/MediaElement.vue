<template>
    <div
        v-if="media"
        class="image-container"
        ref="mediaElement"
        :class="{ 'scale-active': showMediaElement && scaleAnimation, 'scale-animation': scaleAnimation }"
    >
        <img v-if="isImage" class="image" :src="fileURL || ''" :alt="media.alt || 'Media'" />
        <video v-else-if="isVideo" class="video" :src="fileURL || ''" controls />
        <!-- Extend for audio or other types if needed -->
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    const runtimeConfig = useRuntimeConfig();

    export interface MediaElementProps {
        media: WebImages;
        scaleAnimation?: boolean;
    }

    const props = defineProps<MediaElementProps>();

    const fileURL = computed(() => {
        if (props?.media?.url?.startsWith('http')) {
            return props.media.url;
        }
        return runtimeConfig.public.payloadApiUrl + props.media.url;
    });

    const isImage = computed(() => props.media.mimeType?.startsWith('image'));
    const isVideo = computed(() => props.media.mimeType?.startsWith('video'));

    const mediaElement = ref<HTMLElement>();
    const showMediaElement = ref(false);

    onMounted(() => {
        if (mediaElement.value instanceof HTMLElement && props.scaleAnimation) {
            const effectForMedia = getScaleEffect(gsap);
            effectForMedia(mediaElement, showMediaElement);
        }
    });
</script>

<style lang="scss" scoped>
    .video,
    .image {
        @include transition();

        & {
            width: 100%;
            height: auto;
        }
    }
</style>
