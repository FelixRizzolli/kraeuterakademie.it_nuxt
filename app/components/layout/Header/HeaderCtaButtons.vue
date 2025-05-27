<template>
    <section class="cta-buttons-container">
        <div class="cta-buttons grid-container">
            <NuxtLink class="link link-button" :to="data.link?.href">{{ data.link?.text }}</NuxtLink>
            <div class="menu link-button" @click="menuStore.toggleMenu">{{ data.menu }}</div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import { useMenuStore } from '~/stores/menuStore';

    interface Link {
        href: string;
        text: string;
    }

    interface HeaderCtaButtonsData {
        link: Link;
        menu: string;
    }

    interface HeaderCtaButtonsProps {
        data: HeaderCtaButtonsData;
    }

    const props = defineProps<HeaderCtaButtonsProps>();
    const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
    .cta-buttons-container {
        z-index: 10;
        position: absolute;
        height: 100vh;
        width: 100vw;

        pointer-events: none;
    }

    .cta-buttons {
        padding-bottom: 2rem;

        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .link {
        @include col-start(2);
        @include col(12);

        & {
            margin-left: auto;
            margin-right: auto;
            width: fit-content;

            pointer-events: auto;
        }
    }

    .menu {
        display: none;
        width: 100%;
        background-color: $colorBackgroundBrown;

        pointer-events: auto;
    }

    @media (max-width: 1023px) {
        .cta-buttons {
            padding-bottom: 1rem;
        }

        .link {
            @include col-start(2);
            @include col(8);

            & {
                width: 100%;
            }
        }

        .menu {
            @include col-start(10);
            @include col(4);

            & {
                display: block;
            }
        }
    }
</style>
