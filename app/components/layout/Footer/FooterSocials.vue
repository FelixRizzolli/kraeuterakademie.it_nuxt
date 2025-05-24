<template>
    <div class="socials">
        <div
            class="scale-animation"
            v-for="(social, index) in socials"
            :key="index"
            ref="socialElements"
            :class="{ 'scale-active': showSocialElements[index] }"
        >
            <NuxtLink class="social" :to="social.href">
                <img :src="social.src" :alt="social.alt" />
                <component :is="'i-' + social.icon" />
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';

    interface Social {
        icon: string;
        href: string;
        src: string;
        alt: string;
    }

    export interface SocialProps {
        socials: Array<Social>;
    }

    const props = defineProps<SocialProps>();

    const socialElements = ref<HTMLElement[]>([]);
    const showSocialElements = ref<boolean[]>([]);

    onMounted(() => {
        // Initialize visibility array with false values
        showSocialElements.value = Array(socialElements.value.length).fill(false);

        // Set up scale effect for each element
        socialElements.value.forEach((element, index) => {
            const scaleEffect = getScaleEffect(gsap);
            const elementRef = ref(element);

            const elementShowRef = computed({
                get: () => showSocialElements.value[index],
                set: (value) => {
                    showSocialElements.value[index] = value;
                },
            });

            scaleEffect(elementRef, elementShowRef);
        });
    });
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
