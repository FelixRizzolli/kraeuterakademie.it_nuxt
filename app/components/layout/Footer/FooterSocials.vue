<template>
    <div class="socials">
        <template v-for="(social, index) in socials" :key="social.id">
            <div>
                <NuxtLink
                    v-if="social.link"
                    class="social"
                    :to="social.link.href || '#'"
                    :target="social.link.target ?? '_self'"
                >
                    <ResponsiveImage
                        v-if="social.backgroundImage && typeof social.backgroundImage === 'object'"
                        :image="social.backgroundImage"
                    />
                    <component v-if="social.icon" :is="'i-' + social.icon" />
                </NuxtLink>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface FooterSocialsProps {
        data: PublicSocial[];
    }

    const props = defineProps<FooterSocialsProps>();

    const socials = computed(() => props.data || []);
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

            :deep(img) {
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
                :deep(img) {
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
