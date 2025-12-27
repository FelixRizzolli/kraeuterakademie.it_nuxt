<template>
    <footer class="grid-container">
        <FooterAddress v-if="contact" :data="contact" />
        <FooterContact v-if="contact" :data="contact" />
        <div v-if="footer.text1" class="text1" ref="text1Element">
            <LexicalRenderer :nodes="text1Data" />
        </div>
        <div v-if="footer.text2" class="text2" ref="text2Element">
            <LexicalRenderer :nodes="text2Data" />
        </div>
        <FooterSocials v-if="socials" :data="socials" />
        <FooterLinks v-if="footer.links" :links="footer.links" />
        <FooterPartners v-if="partners" :data="partners" />
    </footer>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface FooterProps {
        footer: Footer;
        contact?: Contact | null;
        socials?: WebSocial[] | null;
        partners?: WebPartner[] | null;
    }

    const text1Data = computed(() => (props.footer.text1 as RichText) || null);
    const text2Data = computed(() => (props.footer.text2 as RichText) || null);

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

        & {
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
                text-align: left;
            }
        }

        .text2 {
            @include col-start(2);
            @include col(12);

            & {
                padding-bottom: 4.5rem;
                text-align: left;
            }
        }
    }
</style>
