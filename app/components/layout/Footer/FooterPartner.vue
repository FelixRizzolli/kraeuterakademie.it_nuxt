<template>
    <div class="partner">
        <NuxtLink :to="partner.href" v-for="(partner, index) in partners" :key="index">
            <img
                :src="partner.src"
                :alt="partner.alt"
                class="scale-animation"
                ref="partnerElements"
                :class="{ 'scale-active': showPartnerElements[index] }"
            />
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

interface Partner {
    href: string;
    src: string;
    alt: string;
}

export interface PartnerProps {
    partners: Array<Partner>;
}

const props = defineProps<PartnerProps>();

const partnerElements = ref<HTMLElement[]>([]);
const showPartnerElements = ref<boolean[]>([]);

onMounted(() => {
    // Initialize visibility array with false values
    showPartnerElements.value = Array(partnerElements.value.length).fill(false);

    // Set up scale effect for each element
    partnerElements.value.forEach((element, index) => {
        const scaleEffect = getScaleEffect(gsap);
        const elementRef = ref(element);

        const elementShowRef = computed({
            get: () => showPartnerElements.value[index],
            set: (value) => {
                showPartnerElements.value[index] = value;
            },
        });

        scaleEffect(elementRef, elementShowRef);
    });
});
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
