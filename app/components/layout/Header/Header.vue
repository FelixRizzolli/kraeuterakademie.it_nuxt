<template>
    <header v-if="props.data">
        <HeaderSidebar v-if="data.sidebar" :data="data.sidebar" />
        <HeaderNavigation v-if="data.links" :links="data.links" />
        <HeaderCtaButtons v-if="data.ctaButtons" :data="data.ctaButtons" @toggleNavigation="toggleNavigation" />
    </header>
</template>

<script lang="ts" setup>
    interface HeaderData {
        sidebar: any;
        links: Array<any>;
        ctaButtons: any;
    }

    interface HeaderProps {
        data: HeaderData;
    }

    const props = defineProps<HeaderProps>();

    const showNavigation = ref(false);

    function toggleNavigation() {
        showNavigation.value = !showNavigation.value;
    }
</script>

<style lang="scss" scoped>
    header {
        position: relative;
        z-index: 10;
    }
</style>
