<template>
    <main class="min-h-screen bg-background">
        <slot />
    </main>
</template>

<script setup lang="ts">
    // Import Tailwind CSS for dashboard layout
    import '@/assets/styles/dashboard/tailwind.css';

    useSeoMeta({
        title: 'Dashboard',
    });
</script>
