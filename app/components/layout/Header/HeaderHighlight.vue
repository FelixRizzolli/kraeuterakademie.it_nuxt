<template>
    <section class="highlight">
        <NuxtLink class="logo" to="/">
            <i-logo />
        </NuxtLink>

        <nav class="links">
            <NuxtLink class="link" :to="link.href" v-for="(link, index) in links" :key="index">
                <component :is="'i-' + link.icon" class="link-icon" />
                <span class="link-text">{{ link.text }}</span>
            </NuxtLink>
        </nav>
    </section>
</template>

<script lang="ts" setup>
    export interface HeaderHighlightProps {
        logo: string;
        links: Array<{
            icon: string;
            href: string;
            text: string;
        }>;
        menuOpen: boolean;
    }

    const porps = defineProps<HeaderHighlightProps>();
</script>

<style lang="scss" scoped>
    .highlight {
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
        z-index: 10;
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

    @media (max-width: 1023px) {
        .highlight {
            width: 100%;
            position: static;

            background-color: $colorBackgroundWhite;
        }

        .links {
            display: none;
        }

        .logo {
            margin: 2rem auto 6rem auto;
            width: 11rem;

            :deep(svg) {
                width: 11rem;
            }
        }
    }
</style>
