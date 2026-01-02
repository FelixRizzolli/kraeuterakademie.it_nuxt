<template>
    <div class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <LoginForm />
        </div>
    </div>
</template>

<script lang="ts">
    export const description = 'A login page with form and image.';
</script>

<script setup lang="ts">
    import LoginForm from '~~/layers/dashboard/components/LoginForm.vue';

    definePageMeta({
        layout: 'auth',
    });

    // Redirect if already authenticated
    const { isAuthenticated, hasDashboardAccess, initAuth } = useAuth();

    onMounted(async () => {
        await initAuth();
        if (isAuthenticated.value && hasDashboardAccess.value) {
            navigateTo('/dashboard');
        }
    });
</script>
