<template>
    <component :is="icon" :class="{ filled: filled }" />
</template>

<script lang="ts" setup>
    interface KaIcon {
        icon?: object;
        name?: string;
        filled?: boolean;
    }
    const props = withDefaults(defineProps<KaIcon>(), {
        filled: false,
    });
</script>

<style lang="scss" scoped>
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .filled,
    .filled:deep(*) {
        fill: currentColor;
    }
</style>
