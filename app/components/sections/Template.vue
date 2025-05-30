<template>
    <section class="contentelement_template grid-container"></section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface TemplateData {}

    interface TemplateSettings {}

    export interface TemplateProps {
        data: TemplateData;
        settings?: TemplateSettings;
    }

    const props = defineProps<TemplateProps>();

    onMounted(() => {});
</script>

<style lang="scss" scoped>
    .contentelement_template {
        margin-bottom: 15rem;
    }

    @media (max-width: 1023px) {
        .contentelement_template {
            margin-bottom: 7.5rem;
        }
    }
</style>
