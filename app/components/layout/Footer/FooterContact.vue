<template>
    <div class="contact">
        <a href="tel:+39 3382 698 477" class="link">+39 3382 698 477</a>
        <a href="mailto:sigrid.thaler@gmail.com" class="link">sigrid.thaler@gmail.com</a>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted(() => {});
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
