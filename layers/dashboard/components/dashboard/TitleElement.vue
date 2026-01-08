<template>
    <h1 class="text-4xl mb-4">{{ data.title }}</h1>
</template>

<script lang="ts" setup>
    export interface TitleElementData {
        icon?: string;
        title?: string;
    }
    export interface TitleElementSettings {}

    export interface TitleElementProps {
        data: TitleElementData;
        settings: TitleElementSettings;
    }

    const props = defineProps<TitleElementProps>();
</script>
