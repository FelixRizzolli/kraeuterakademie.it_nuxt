<template>
    <div class="contact" ref="containerElement">
        <a :href="telLink.href" class="link">{{ telLink.text }}</a>
        <a :href="mailLink.href" class="link">{{ mailLink.text }}</a>
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    const containerElement = ref<HTMLElement>();

    interface Link {
        href: string;
        text: string;
    }

    export interface FooterContactProps {
        telLink: Link;
        mailLink: Link;
    }

    const props = defineProps<FooterContactProps>();

    onMounted(() => {
        if (containerElement.value) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(containerElement);
        }
    });
</script>

<style lang="scss" scoped>
    .contact {
        @include col-start(5);
        @include col(6);
        @include font-50-63-1-BL();
        @include fontFamilyHeading();

        & {
            padding-bottom: 4rem;
        }

        a {
            width: 100%;

            text-align: center;
            text-decoration: none;
            text-transform: lowercase;

            color: $colorFontLight;

            &:hover {
                color: $colorCta;
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 1023px) {
        .contact {
            @include col-start(2);
            @include col(12);
            @include font-50-63-1-B();

            & {
                padding-bottom: 4.5rem;
            }

            a {
                text-align: left;
            }
        }
    }
</style>
