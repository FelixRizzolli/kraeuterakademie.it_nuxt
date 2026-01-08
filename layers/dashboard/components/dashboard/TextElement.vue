<template>
    <h2 v-if="data.title" class="text-2xl mb-2">{{ data.title }}</h2>
    <LexicalRenderer v-if="data.text" :nodes="data.text" />
</template>

<script lang="ts" setup>
    import LexicalRenderer from '~~/layers/public/components/elements/LexicalRenderer.vue';

    export interface TextElementData {
        title?: string;
        text?: RichText;
    }
    export interface TextElementSettings {}

    export interface TextElementProps {
        data: TextElementData;
        settings: TextElementSettings;
    }

    const props = defineProps<TextElementProps>();
</script>
