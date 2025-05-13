<template>
    <header>
        <HeaderHighlight :logo="highlight.logo" :links="highlight.links" />
        <HeaderNavigation :links="navigation.links" />
        <HeaderCtaButtons :menu="ctaButtons.menu" :link="ctaButtons.link" />
    </header>
</template>

<script lang="ts" setup>
import type { HeaderHighlightProps } from './HeaderHighlight.vue';
import type { HeaderNavigationProps } from './HeaderNavigation.vue';
import type { HeaderCtaButtonsProps } from './HeaderCtaButtons.vue';

export interface HeaderProps {
    highlight: HeaderHighlightProps;
    navigation: HeaderNavigationProps;
    ctaButtons: HeaderCtaButtonsProps;
}

const props = defineProps<HeaderProps>();
</script>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 10;
}
</style>
