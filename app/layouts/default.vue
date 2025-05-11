<template>
    <Header :sidebar="pageData.header.sidebar" :top-navigation="pageData.header.topNavigation" :cta-button="pageData.header.ctaButton" />
    <main>
        <slot />
    </main>
    <Footer />
</template>

<script lang="ts" setup>
import type { FooterProps } from "~/components/layout/Footer/Footer.vue";
import type { HeaderProps } from "~/components/layout/Header/Header.vue";

interface PageData {
    header: HeaderProps;
    footer: FooterProps;
}

const pageData = ref<PageData>({
    header: {
        sidebar: {
            logo: "",
            links: [
                { icon: "open-book", text: "Blog", href: "/blog" },
                { icon: "calendar", text: "Termine", href: "/termine" },
                { icon: "camera", text: "Galerie", href: "/galerie" },
            ],
        },
        topNavigation: {
            links: [
                { text: "Kräuterkurse", href: "/kraeuterkurse" },
                { text: "Seminare", href: "/seminare" },
                { text: "Bücher", href: "/buecher" },
                { text: "Über Mich", href: "/ueber-mich" },
                { text: "FNL", href: "/fnl" },
                { text: "Kontakt", href: "/contact" },
            ],
        },
        ctaButton: {
            text: "Zum Kurs anmelden",
            link: "/kraeuterkurse",
        },
    },
    footer: {},
});
</script>

<style lang="scss" scoped></style>
