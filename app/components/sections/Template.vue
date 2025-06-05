<template>
    <SectionElement
        class="contentelement_template grid-container"
        :spacing="settings?.spacing"
        :style="settings?.templateStyle"
    >
        <div></div>
    </SectionElement>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    interface TemplateData {}

    interface TemplateSettings {
        spacing: any;
        templateStyle: string;
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
