<template>
    <header>
        <HeaderHighlight :logo="highlight.logo" :links="highlight.links" :menuOpen="showNavigation" />
        <HeaderNavigation :links="navigation.links" :menuOpen="showNavigation" />
        <HeaderCtaButtons :menu="ctaButtons.menu" :link="ctaButtons.link" @toggleNavigation="toggleNavigation" />
    </header>
</template>

<script lang="ts" setup>
import type { HeaderHighlightProps } from "./HeaderHighlight.vue";
import type { HeaderNavigationProps } from "./HeaderNavigation.vue";
import type { HeaderCtaButtonsProps } from "./HeaderCtaButtons.vue";

export interface HeaderProps {
    highlight: HeaderHighlightProps;
    navigation: HeaderNavigationProps;
    ctaButtons: HeaderCtaButtonsProps;
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
