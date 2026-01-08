<template>
    <DashboardImageElement v-if="name === 'ImageElement' && data" :data="data" :settings="settings" />
    <DashboardImageText v-else-if="name === 'ImageText' && data" :data="data" :settings="settings" />
    <DashboardTitleElement v-else-if="name === 'TitleElement' && data" :data="data" :settings="settings" />
    <DashboardTextElement v-else-if="name === 'TextElement' && data" :data="data" :settings="settings" />
</template>

<script lang="ts" setup>
    import DashboardImageElement from '~~/layers/dashboard/components/dashboard/ImageElement';
    import DashboardImageText from '~~/layers/dashboard/components/dashboard/ImageText';
    import DashboardTextElement from '~~/layers/dashboard/components/dashboard/TextElement';
    import DashboardTitleElement from '~~/layers/dashboard/components/dashboard/TitleElement';

    interface DashboardContentComponentRendererProps {
        name: string;
        data: any;
        settings?: any;
    }

    const props = defineProps<DashboardContentComponentRendererProps>();
</script>

<style></style>
