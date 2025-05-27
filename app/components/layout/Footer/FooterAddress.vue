<template>
    <address class="address" ref="containerElement">
        <p class="name">{{ data.name }}</p>
        <p class="street">{{ data.street }}</p>
        <p class="place">{{ data.place }}</p>
    </address>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    const containerElement = ref<HTMLElement>();

    export interface FooterAddressData {
        name?: string;
        street?: string;
        place?: string;
    }

    interface FooterAddressProps {
        data: FooterAddressData;
    }

    const props = defineProps<FooterAddressProps>();

    onMounted(() => {
        if (containerElement.value) {
            const opacityEffect = getOpacityEffect(gsap);
            opacityEffect(containerElement);
        }
    });
</script>

<style lang="scss" scoped>
    .address {
        @include col-start(2);
        @include col(3);
    }

    @media (max-width: 1023px) {
        .address {
            @include col-start(2);
            @include col(12);

            & {
                padding-bottom: 4.5rem;
            }
        }
    }
</style>
