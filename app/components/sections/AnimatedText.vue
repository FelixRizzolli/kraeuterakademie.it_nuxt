<template>
    <section class="contentelement_animatedtext grid-container">
        <p v-if="data.text" class="text" ref="textElement">{{ data.text }}</p>
    </section>
</template>

<script lang="ts" setup>
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { SplitText } from 'gsap/SplitText';

    interface AnimatedTextData {
        text: string;
    }

    interface AnimatedTextSettings {}

    export interface AnimatedTextProps {
        data: AnimatedTextData;
        settings?: AnimatedTextSettings;
    }

    const props = defineProps<AnimatedTextProps>();

    const textElement = ref<HTMLElement | null>(null);

    onMounted(async () => {
        if (textElement.value instanceof HTMLParagraphElement) {
            gsap.registerPlugin(ScrollTrigger, SplitText);

            const split = new SplitText(textElement.value, { type: 'chars', tag: 'span' });

            const scrollTrigger: ScrollTrigger.Vars = {
                trigger: textElement.value.closest('.contentelement_animatedtext'),
                start: 'top center',
                end: 'bottom center',
                scrub: 3, // Increased for slower scroll response
                /* markers: true, // Remove in production */
            };

            // Set initial state
            gsap.set(split.chars, { color: '#D7D2CB' });

            // Create animation
            gsap.to(split.chars, {
                color: '#b6d590',
                scrollTrigger,
                stagger: {
                    amount: 4, // Increased from 2 to 4 seconds for slower character transitions
                    from: 'start', // Animate from left to right
                },
            });
        }
    });
</script>

<style lang="scss" scoped>
    .contentelement_animatedtext {
        margin-bottom: 15rem;
        padding: 15rem 0;

        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;
    }

    .text {
        @include col-start(3);
        @include col(10);
        @include font-50-63-1-BL();
        @include fontFamilyHeading();
    }

    @media (max-width: 1023px) {
        .contentelement_animatedtext {
            margin-bottom: 7.5rem;
            padding: 7.5rem 0;
        }

        .text {
            @include col-start(2);
            @include col(12);
            @include font(22, 28, 1);
        }
    }
</style>
