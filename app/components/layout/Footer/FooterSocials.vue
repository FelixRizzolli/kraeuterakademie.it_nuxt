<template>
    <div class="socials">
        <NuxtLink class="social" to="/impressum">
            <img src="/images/socials/facebook.png" alt="Facebook" />
            <i-facebook />
        </NuxtLink>
        <NuxtLink class="social" to="/impressum">
            <img src="/images/socials/instagram.png" alt="Instagram" />
            <i-instagram />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted(() => {});
</script>

<style lang="scss" scoped>
.socials {
    @include col-start(5);
    @include col(6);

    & {
        width: 100%;

        display: flex;
        justify-content: center;
        gap: 3rem;
    }

    .social {
        position: relative;

        img {
            height: 7.5rem;
            width: 7.5rem;
        }

        :deep(svg) {
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;

            height: 7.5rem;
            width: 7.5rem;
        }
    }
}

@media (max-width: 1023px) {
    .socials {
        @include col-start(2);
        @include col(12);

        & {
            padding-bottom: 4.5rem;
            justify-content: left;
            gap: 2rem;
        }

        .social {
            img {
                height: 6rem;
                width: 6rem;
            }

            :deep(svg) {
                height: 6rem;
                width: 6rem;
            }
        }
    }
}
</style>
