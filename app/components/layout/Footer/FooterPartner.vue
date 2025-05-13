<template>
    <div class="partner">
        <NuxtLink to="https://fnl-kraeuterakademie.at/">
            <img src="/images/partner/fnl_akademie_logo.png" alt="FML Kräuterakademie nach Ignaz Schlifni" />
        </NuxtLink>
        <NuxtLink to="https://fnl.at/">
            <img src="/images/partner/fnl_experte_logo.png" alt="FML Kräuterexperte*in nach Ignaz Schlifni" />
        </NuxtLink>
        <NuxtLink to="http://www.suedtiroler-kraeuterpaedagogen.it/">
            <img src="/images/partner/skp_logo.png" alt="Südtiroler Kräuterpädagogen" />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted(() => {});
</script>

<style lang="scss" scoped>
.partner {
    @include col-start(1);
    @include col(14);

    padding: 5.5rem;
    background-color: $colorBackgroundCream;

    display: flex;
    justify-content: end;
    gap: 4.5rem;

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
