<template>
    <DashboardImg
        v-if="data.image"
        :image="data.image"
        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        loading="eager"
    />
</template>

<script lang="ts" setup>
    export interface ImageElementData {
        image: DashboardImage;
    }
    export interface ImageElementSettings {}

    export interface ImageElementProps {
        data: ImageElementData;
        settings: ImageElementSettings;
    }

    const props = defineProps<ImageElementProps>();
</script>
