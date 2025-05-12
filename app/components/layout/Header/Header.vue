<template>
    <header>
        <HeaderHighlight :logo="highlight.logo" :links="highlight.links" />
        <HeaderNavigation :links="navigation.links" />
        <section class="button"></section>
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
    ctaButton: HeaderCtaButtonProps;
}

const props = defineProps<HeaderProps>();
</script>

<style lang="scss" scoped>
header {
    position: relative;
    z-index: 10;
}
</style>
