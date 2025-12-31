<template>
    <SectionElement
        class="contentelement_template grid-container"
        :spacing="settings?.spacing"
        :style="settings?.style"
    >
        <div></div>
    </SectionElement>
</template>

<script lang="ts" setup>
    interface TemplateData {}

    interface TemplateSettings {
        spacing: Spacing;
        style: string;
    }

    export interface TemplateProps {
        data: TemplateData;
        settings: TemplateSettings;
    }

    const props = defineProps<TemplateProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    @media (max-width: 1023px) {
    }
</style>
