<template>
    <nav class="top-navigation">
        <NuxtLink v-for="(link, index) in links" :key="index" class="link" :to="link.href">{{ link.text }}</NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
export interface HeaderTopNavigationProps {
    links: Array<{
        text: string;
        href: string;
    }>;
}

const props = defineProps<HeaderTopNavigationProps>();
</script>

<style lang="scss" scoped>
.top-navigation {
    margin: 4.5rem 9rem 0 0;

    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    gap: 4.5rem;
}

.link {
    text-decoration: none;
    cursor: pointer;

    color: $colorFontLight;
}

.link:hover {
    color: $colorCta;
}
</style>
