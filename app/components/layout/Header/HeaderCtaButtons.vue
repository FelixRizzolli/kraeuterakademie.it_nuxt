<template>
    <sectoion class="cta-buttons-container">
        <div class="cta-buttons grid-container">
            <NuxtLink class="link link-button" :to="link?.href">{{ link?.text }}</NuxtLink>
            <div class="menu link-button">{{ menu }}</div>
        </div>
    </sectoion>
</template>

<script lang="ts" setup>
export interface CtaButtonsProps {
    link: {
        href: string;
        text: string;
    };
    menu: string;
}

const props = defineProps<CtaButtonsProps>();
</script>

<style lang="scss" scoped>
.cta-buttons-container {
    position: absolute;
    height: 100vh;
    width: 100%;
}

.cta-buttons {
    padding-bottom: 1rem;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}

.link {
    @include col-start(2);
    @include col(8);

    & {
        width: 100%;
    }
}

.menu {
    @include col-start(10);
    @include col(4);

    & {
        width: 100%;
        background-color: $colorBackgroundBrown;
    }
}
</style>
