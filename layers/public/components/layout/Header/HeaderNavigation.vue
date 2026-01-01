<template>
    <nav class="navigation" :class="{ 'menu-open': menuStore.isOpen }">
        <NuxtLink class="logo" to="/" @click="menuStore.closeMenu">
            <i-logo />
        </NuxtLink>
        <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            class="link"
            :to="link.href || '/'"
            @click="menuStore.closeMenu"
            :target="link.target ?? '_self'"
        >
            {{ link.text }}
        </NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
    import { useMenuStore } from '~/stores/menuStore';

    interface HeaderNavigationProps {
        links: Array<PublicHeader_Links>;
    }

    const props = defineProps<HeaderNavigationProps>();
    const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .logo {
        margin: 2rem auto 6rem auto;
        width: 11rem;
        height: auto;

        display: none;

        :deep(svg) {
            width: 11rem;
            height: auto;
        }
    }

    .navigation {
        margin: 4.5rem 9rem 0 0;

        position: absolute;
        top: 0;
        right: 0;

        display: flex;
        gap: 4.5rem;

        transition: transform 0.5s ease-in-out;

        &.menu-open {
            transform: translateY(0);
        }
    }

    .link {
        text-decoration: none;
        cursor: pointer;

        color: $colorFontLight;
    }

    .link:hover {
        color: $colorCta;
    }

    @media (max-width: 1023px) {
        .logo {
            display: block;
        }

        .navigation {
            margin: 0;
            z-index: 10;
            position: fixed;

            align-items: center;
            flex-direction: column;
            gap: 3rem;

            height: 100vh;
            width: 100vw;

            background-color: $colorBackgroundCream;

            transform: translateY(+100%);
        }
    }
</style>
