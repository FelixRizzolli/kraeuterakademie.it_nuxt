<template>
    <section class="contentelement_template grid-container"></section>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

export interface TemplateProps {}

const props = defineProps<TemplateProps>();

onMounted(() => {});
</script>

<style lang="scss" scoped>
.contentelement_template {
    margin-bottom: 15rem;
}

@media (max-width: 1023px) {
    .contentelement_template {
        margin: 7.5rem;
    }
}
</style>
