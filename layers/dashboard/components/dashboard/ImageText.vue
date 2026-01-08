<template>
    <div class="flex">
        <div class="flex-1">
            <DashboardImg
                v-if="data.image"
                :image="data.image"
                class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                loading="eager"
            />
        </div>
        <div class="flex-2 ml-6">
            <LexicalRenderer v-if="data.text" :nodes="data.text" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    export interface ImageTextData {
        image: DashboardImage;
        text: RichText;
    }
    export interface ImageTextSettings {}

    export interface ImageTextProps {
        data: ImageTextData;
        settings: ImageTextSettings;
    }

    const props = defineProps<ImageTextProps>();
</script>
