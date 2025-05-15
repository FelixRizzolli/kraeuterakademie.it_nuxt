<template>
    <Header :highlight="pageData.header.highlight" :navigation="pageData.header.navigation" :cta-buttons="pageData.header.ctaButtons" />
    <main>
        <slot />
    </main>
    <Footer :address="pageData.footer.address" :contact="pageData.footer.contact" :text1="pageData.footer.text1" :text2="pageData.footer.text2" :links="pageData.footer.links" :socials="pageData.footer.socials" :partner="pageData.footer.partner" />
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
        highlight: {
            logo: "",
            links: [
                //{ icon: "open-book", text: "Blog", href: "/blog" },
                //{ icon: "calendar", text: "Termine", href: "/termine" },
                //{ icon: "camera", text: "Galerie", href: "/galerie" },
            ],
        },
        navigation: {
            links: [
                { text: "Kräuterkurse", href: "/kraeuterkurse" },
                //{ text: "Seminare", href: "/seminare" },
                //{ text: "Bücher", href: "/buecher" },
                { text: "Über Mich", href: "/ueber-mich" },
                //{ text: "FNL", href: "/fnl" },
                { text: "Kontakt", href: "/kontakt" },
            ],
        },
        ctaButtons: {
            link: {
                text: "Kurs anfragen",
                href: "mailto:sigrid.thaler@gmail.com?subject=Anmeldung zum Kräuterkurs",
            },
            menu: "Menü",
        },
    },
    footer: {
        address: {
            name: "Sigrid Thaler Rizzolli",
            street: "Weingütl Nr. 6",
            place: "39040 Montan, Italien",
        },
        contact: {
            telLink: {
                href: "tel:+39 3382 698 477",
                text: "+39 3382 698 477",
            },
            mailLink: {
                href: "mailto:sigrid.thaler@gmail.com",
                text: "sigrid.thaler@gmail.com",
            },
        },
        text1: String.raw`
            <p>Natürliche Entscheidungen.</p>
            <p>Gesundes Leben.</p>
        `,
        text2: "Kräuterakademie Südtirol",
        socials: {
            socials: [
                {
                    icon: "facebook",
                    href: "https://www.facebook.com/sigrid.thaler.73",
                    src: "/images/socials/facebook.png",
                    alt: "Facebook",
                },
                {
                    icon: "instagram",
                    href: "https://www.instagram.com/thalersigrid/",
                    src: "/images/socials/instagram.png",
                    alt: "Instagram",
                },
            ],
        },
        links: {
            links: [
                { text: "Impressum", href: "/impressum" },
                { text: "Privacy", href: "/privacy" },
                { text: "Cookies", href: "/cookies" },
            ],
        },
        partner: {
            partners: [
                {
                    href: "https://fnl-kraeuterakademie.at/",
                    src: "/images/partner/fnl_akademie_logo.png",
                    alt: "FML Kräuterakademie nach Ignaz Schlifni",
                },
                {
                    href: "https://fnl.at/",
                    src: "/images/partner/fnl_experte_logo.png",
                    alt: "FML Kräuterexperte*in nach Ignaz Schlifni",
                },
                {
                    href: "http://www.suedtiroler-kraeuterpaedagogen.it/",
                    src: "/images/partner/skp_logo.png",
                    alt: "Südtiroler Kräuterpädagogen",
                },
            ],
        },
    },
});
</script>

<style lang="scss" scoped></style>
