<template>
    <div class="storybook-story-wrapper">
        <div class="inner-wrapper">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
    @use '~~/layers/public/assets/styles/public/utils.scss' as *;

    .storybook-story-wrapper {
        padding-top: 20rem;
        padding-bottom: 20rem;
    }

    .inner-wrapper {
        border: 1px solid black;
    }
</style>
