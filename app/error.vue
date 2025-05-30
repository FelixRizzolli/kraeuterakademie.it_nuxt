<template>
    <NuxtLayout>
        <section class="error grid-container">
            <h1 class="code">{{ error?.statusCode }}</h1>
            <h2 class="message">{{ error?.statusMessage }}</h2>
            <NuxtLink :to="errorLink ?? '/'" class="link-button">{{ errorLinktext }}</NuxtLink>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps({
        error: Object as () => NuxtError,
    });

    const errorLinktext = ref<string | undefined | null>(null);
    const errorLink = ref<string | undefined | null>(null);
    onMounted(() => {
        errorLinktext.value = useTextBlock('error-linktext');
        errorLink.value = useTextBlock('error-link');
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
