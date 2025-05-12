<template>
    <header>
        <HeaderHighlight :logo="highlight.logo" :links="highlight.links" />
        <HeaderNavigation :links="navigation.links" />
        <HeaderCtaButtons :menu="ctaButtons.menu" :link="ctaButtons.link" />
    </header>
</template>

<script lang="ts" setup>
export interface HeaderCtaButtonProps {
    text: string;
    link: string;
}

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
