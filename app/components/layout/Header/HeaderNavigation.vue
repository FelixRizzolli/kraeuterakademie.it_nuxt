<template>
    <nav class="navigation">
        <NuxtLink v-for="(link, index) in links" :key="index" class="link" :to="link.href">{{ link.text }}</NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
export interface HeaderNavigationProps {
    links: Array<{
        text: string;
        href: string;
    }>;
}

const props = defineProps<HeaderNavigationProps>();
</script>

<style lang="scss" scoped>
.navigation {
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

@media (max-width: 1024px) {
    .navigation {
        margin: 0;
        z-index: 1;
        position: absolute;

        align-items: center;
        flex-direction: column;
        gap: 3rem;

        height: 100vh;
        width: 100%;

        background-color: $colorBackgroundCream;

        transform: translateY(-100%);
    }

    .link {
        &:first-of-type {
            margin-top: 22rem;
        }
    }
}
</style>
