<template>
    <footer v-if="props.data" class="grid-container">
        <FooterAddress v-if="data.address" :data="data.address" />
        <FooterContact v-if="data.contact" :data="data.contact" />
        <div v-if="data.text1" class="text1" ref="text1Element">
            <StrapiBlocksText :nodes="data.text1" />
        </div>
        <div v-if="data.text2" class="text2" ref="text2Element">
            <StrapiBlocksText :nodes="data.text2" />
        </div>
        <FooterSocials v-if="data?.socials" :socials="data.socials" />
        <FooterLinks v-if="data?.links" :links="data.links" />
        <FooterPartners v-if="data?.partners" :partners="data.partners" />
    </footer>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    export interface FooterData {
        address: any;
        contact: any;
        text1: any;
        text2: any;
        socials: any;
        links: any;
        partners: any;
    }

    interface FooterProps {
        data: FooterData;
    }

    const props = defineProps<FooterProps>();

    const text1Element = ref<HTMLElement>();
    const text2Element = ref<HTMLElement>();

    onMounted(() => {
        console.log('Footer mounted with data:', props);

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
