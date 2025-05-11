<template>
    <section class="contentelement_animatedtext grid-container">
        <p class="text" ref="textElement">{{ text }}</p>
    </section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

interface AnimatedTextProps {
    text: string;
}

const props = defineProps<AnimatedTextProps>();

const textElement = ref<HTMLElement | null>(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    if (!textElement.value) return;

    const split = new SplitText(textElement.value, { type: "chars", tag: "span" });

    const scrollTrigger: ScrollTrigger.Vars = {
        trigger: textElement.value.closest(".contentelement_animatedtext"),
        start: "top center",
        end: "bottom center",
        scrub: 3, // Increased for slower scroll response
        /* markers: true, // Remove in production */
    };

    // Set initial state
    gsap.set(split.chars, { color: "#D7D2CB" });

    // Create animation
    gsap.to(split.chars, {
        color: "#b6d590",
        scrollTrigger,
        stagger: {
            amount: 4, // Increased from 2 to 4 seconds for slower character transitions
            from: "start", // Animate from left to right
        },
    });
});
</script>

<style lang="scss" scoped>
.contentelement_animatedtext {
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
</style>
