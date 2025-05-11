<template>
    <section class="sidebar">
        <div class="logo">
            <i-logo />
        </div>

        <nav class="links">
            <NuxtLink class="link" :to="link.href" v-for="(link, index) in links" :key="index">
                <component :is="'i-' + link.icon" class="link-icon" />
                <span class="link-text">{{ link.text }}</span>
            </NuxtLink>
        </nav>
    </section>
</template>

<script lang="ts" setup>
export interface HeaderSidebarProps {
    logo: string;
    links: Array<{
        icon: string;
        href: string;
        text: string;
    }>;
}

const porps = defineProps<HeaderSidebarProps>();
</script>

<style lang="scss" scoped>
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 21rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: $colorBackgroundCream;
}

.logo {
    margin-top: 4.2rem;

    display: flex;
    justify-content: center;

    :deep(svg) {
        object-fit: cover;

        width: 13rem;
        height: auto;
    }
}

.links {
    margin: 9rem 4rem;
}

.link {
    display: flex;
    gap: 1.5rem;

    text-decoration: none;
    cursor: pointer;

    &:not(:last-of-type) {
        margin-bottom: 2.5rem;
    }

    .link-icon {
        width: 2.6rem;
        height: auto;
        object-fit: fill;

        :deep(path) {
            stroke: $colorFontLight;
        }
    }

    .link-text {
        color: $colorFontLight;
    }
}

.link:hover {
    .link-icon {
        :deep(path) {
            stroke: $colorCta;
        }
    }

    .link-text {
        color: $colorCta;
    }
}
</style>
