<template>
    <address class="address">
        <p class="name">Sigrid Thaler Rizzolli</p>
        <p class="street">Weingütl Nr. 6</p>
        <p class="place">39040 Montan, Italien</p>
    </address>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

onMounted(() => {});
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
