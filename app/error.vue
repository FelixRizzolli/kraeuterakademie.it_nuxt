<template>
    <NuxtLayout>
        <section class="error grid-container">
            <h1 class="code">{{ error?.statusCode }}</h1>
            <h2 class="message">{{ error?.statusMessage }}</h2>
            <NuxtLink to="/" class="link-button">Zurück zur Startseite</NuxtLink>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps({
        error: Object as () => NuxtError,
    });
</script>

<style lang="scss" scoped>
    .error {
        padding: 15rem 0;
    }

    .code,
    .message,
    .link-button {
        @include col-start(3);
        @include col(11);
    }

    .link-button {
        margin-top: 4.5rem;
    }

    @media (max-width: 1023px) {
        .error {
            padding: 7.5rem 0;
        }

        .code,
        .message,
        .link-button {
            @include col-start(2);
            @include col(12);
        }
    }
</style>
