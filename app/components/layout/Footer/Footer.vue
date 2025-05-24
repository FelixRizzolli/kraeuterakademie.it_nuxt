<template>
    <footer class="grid-container">
        <FooterAddress :name="address.name" :street="address.street" :place="address.place" />
        <FooterContact :tel-link="contact.telLink" :mail-link="contact.mailLink" />
        <div class="text1" ref="text1Element" v-html="text1"></div>
        <div class="text2" ref="text2Element" v-html="text2"></div>
        <FooterSocials :socials="socials.socials" />
        <FooterLinks :links="links.links" />
        <FooterPartner :partners="partner.partners" />
    </footer>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    export interface FooterProps {
        address: FooterAddressProps;
        contact: FooterContactProps;
        text1: string;
        text2: string;
        socials: FooterSocialsProps;
        links: FooterLinksProps;
        partner: FooterPartnerProps;
    }

    const props = defineProps<FooterProps>();

    const text1Element = ref<HTMLElement>();
    const text2Element = ref<HTMLElement>();

    onMounted(() => {
        if (text1Element.value) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(text1Element);
        }
        if (text2Element.value) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(text2Element);
        }
    });
</script>

<style lang="scss" scoped>
    footer {
        @include font-17-29-5-L-U();

        & {
            padding-top: 6rem;
            row-gap: 3rem;
        }
    }

    .text1 {
        @include col-start(11);
        @include col(3);

        p {
            text-align: right;
        }
    }

    .text2 {
        @include col-start(2);
        @include col(3);

        & {
            height: 100%;

            display: flex;
            align-items: center;
        }
    }

    @media (max-width: 1023px) {
        footer {
            row-gap: 0;
        }

        .text1 {
            @include col-start(2);
            @include col(12);

            & {
                padding-bottom: 1.5rem;
            }

            p {
                text-align: left;
            }
        }

        .text2 {
            @include col-start(2);
            @include col(12);

            & {
                padding-bottom: 4.5rem;
            }
        }
    }
</style>
