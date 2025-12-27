<template>
    <header v-if="props.header && props.sidebar">
        <HeaderSidebar v-if="sidebar" :data="sidebar" />
        <HeaderNavigation v-if="header.links" :links="header.links" />
        <HeaderCtaButtons @toggleNavigation="toggleNavigation" />
    </header>
</template>

<script lang="ts" setup>
    interface HeaderProps {
        header: Header;
        sidebar: Sidebar;
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
