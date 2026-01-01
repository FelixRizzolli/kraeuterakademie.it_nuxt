<template>
    <div class="min-h-screen bg-background">
        <slot />
    </div>
</template>

<script lang="ts" setup>
    useHead({
        htmlAttrs: {
            class: 'dashboard-root',
        },
    });
</script>

<style scoped>
    /* Reset any inherited public styles */
    .dashboard-root {
        font-size: 16px; /* Reset to standard base font-size */
    }

    .dashboard-root :deep(*) {
        /* Ensure shadcn/Tailwind styles take precedence */
        box-sizing: border-box;
    }
</style>
