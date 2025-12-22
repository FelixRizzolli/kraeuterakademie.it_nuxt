<template>
    <div class="partner">
        <NuxtLink
            :to="partner.link.href"
            v-for="(partner, index) in partners"
            :key="index"
            :target="partner.link.target ?? '_self'"
        >
            <MediaElement v-if="partner.image" :media="partner.image" scale-animation />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
    interface Partner {
        link: Link;
        image: WebMedia;
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
