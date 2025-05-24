<template>
    <component :is="icon" :class="{ filled: filled }" />
</template>

<script lang="ts" setup>
    interface KaIcon {
        icon?: Object;
        name?: string;
        filled?: boolean;
    }
    const props = withDefaults(defineProps<KaIcon>(), {
        filled: false,
    });
</script>

<style lang="scss" scoped>
    .filled,
    .filled:deep(*) {
        fill: currentColor;
    }
</style>
