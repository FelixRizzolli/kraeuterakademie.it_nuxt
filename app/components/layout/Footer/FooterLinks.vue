<template>
    <nav class="footer-links" ref="containerElement">
        <span v-for="(link, index) in links" :key="index" class="link-wrapper">
            <NuxtLink class="link" :to="link.href">{{ link.text }}</NuxtLink>
            <span v-if="index < links.length - 1" class="sep">.</span>
        </span>
    </nav>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

const containerElement = ref<HTMLElement>();

interface Link {
    href: string;
    text: string;
}

export interface FooterLinksProps {
    links: Array<Link>;
}

const props = defineProps<FooterLinksProps>();

onMounted(() => {
    if (containerElement.value) {
        const opacityEffect = getOpacityEffect(gsap);
        opacityEffect(containerElement);
    }
});
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
