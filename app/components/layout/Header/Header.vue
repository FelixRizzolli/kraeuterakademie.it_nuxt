<template>
    <header>
        <HeaderHighlight :logo="highlight.logo" :links="highlight.links" />
        <HeaderTopNavigation :links="topNavigation.links" />
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
    topNavigation: HeaderTopNavigationProps;
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
