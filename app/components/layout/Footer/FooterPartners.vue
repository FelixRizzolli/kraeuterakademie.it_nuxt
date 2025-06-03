<template>
    <div class="partner">
        <NuxtLink
            :to="partner.link.href"
            v-for="(partner, index) in partners"
            :key="index"
            :target="partner.link.target ?? '_self'"
        >
            <StrapiImage v-if="partner.image" :image="partner.image" scale-animation />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    interface StrapiImage {
        alternativeText: string | null;
        url: string;
    }

    interface Link {
        href: string;
        text: string;
        target?: string;
    }

    interface Partner {
        link: Link;
        image: StrapiImage;
    }

    interface FooterPartnerProps {
        partners: Array<Partner>;
    }

    const props = defineProps<FooterPartnerProps>();
</script>

<style lang="scss" scoped>
    .partner {
        @include col-start(1);
        @include col(14);

        & {
            padding: 5.5rem;
            background-color: $colorBackgroundCream;

            display: flex;
            justify-content: end;
            gap: 4.5rem;
        }

        img {
            height: 9rem;
            width: auto;
        }
    }

    @media (max-width: 1023px) {
        .partner {
            padding: 2.5rem;

            justify-content: start;
            gap: 2rem;

            img {
                height: 4.4rem;
            }
        }
    }
</style>
