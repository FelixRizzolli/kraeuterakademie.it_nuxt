<template>
    <Header :highlight="pageData.header.highlight" :navigation="pageData.header.navigation" :cta-button="pageData.header.ctaButton" />
    <main>
        <slot />
    </main>
    <Footer />
</template>

<script lang="ts" setup>
interface PageData {
    header: HeaderProps;
    footer: FooterProps;
}

const pageData = ref<PageData>({
    header: {
        highlight: {
            logo: "",
            links: [
                { icon: "open-book", text: "Blog", href: "/blog" },
                { icon: "calendar", text: "Termine", href: "/termine" },
                { icon: "camera", text: "Galerie", href: "/galerie" },
            ],
        },
        navigation: {
            links: [
                { text: "Kräuterkurse", href: "/kraeuterkurse" },
                { text: "Seminare", href: "/seminare" },
                { text: "Bücher", href: "/buecher" },
                { text: "Über Mich", href: "/ueber-mich" },
                { text: "FNL", href: "/fnl" },
                { text: "Kontakt", href: "/kontakt" },
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
