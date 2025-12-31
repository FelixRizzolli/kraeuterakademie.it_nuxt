<template>
    <header>
        <HeaderSidebar :data="sidebar" />
        <HeaderNavigation v-if="header.links" :links="header.links" />
        <HeaderCtaButtons @toggleNavigation="toggleNavigation" />
    </header>
</template>

<script lang="ts" setup>
    interface HeaderProps {
        header: PublicHeader;
        sidebar: PublicSidebar;
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
