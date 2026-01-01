<template>
    <div class="partner">
        <template v-for="partner in partners">
            <NuxtLink
                :key="partner.id"
                v-if="partner.link"
                :to="partner.link.href || '#'"
                :target="partner.link.target ?? '_self'"
            >
                <ResponsiveImage
                    v-if="partner.image && typeof partner.image === 'object'"
                    :image="partner.image"
                    scale-animation
                />
            </NuxtLink>
        </template>
    </div>
</template>

<script lang="ts" setup>
    interface FooterPartnerProps {
        data: PublicPartner[];
    }

    const props = defineProps<FooterPartnerProps>();

    const partners = computed(() => props.data || []);
</script>

<style lang="scss" scoped>
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

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

        :deep(img) {
            height: 9rem;
            width: auto;
        }
    }

    @media (max-width: 1023px) {
        .partner {
            padding: 2.5rem;

            justify-content: start;
            gap: 2rem;

            :deep(img) {
                height: 4.4rem;
            }
        }
    }
</style>
