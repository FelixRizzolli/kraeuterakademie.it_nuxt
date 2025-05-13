<template>
    <nav class="footer-links">
        <NuxtLink class="link" to="/impressum">Impressum</NuxtLink>
        <span class="sep">.</span>
        <NuxtLink class="link" to="/privacy">Privacy</NuxtLink>
        <span class="sep">.</span>
        <NuxtLink class="link" to="/cookies">Cookies</NuxtLink>
    </nav>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted(() => {});
</script>

<style lang="scss" scoped>
.footer-links {
    @include col-start(11);
    @include col(3);

    & {
        height: 100%;

        display: flex;
        justify-content: end;
        align-items: center;
    }

    .sep {
        padding: 0 0.5rem;
    }

    a {
        color: $colorFont;
        text-decoration: none;

        &:hover {
            color: $colorCta;
            text-decoration: underline;
        }
    }
}

@media (max-width: 1023px) {
    .footer-links {
        @include col-start(2);
        @include col(12);

        & {
            padding-bottom: 1.5rem;
            justify-content: left;
        }
    }
}
</style>
