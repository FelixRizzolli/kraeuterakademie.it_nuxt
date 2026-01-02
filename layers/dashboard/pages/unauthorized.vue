<template>
    <div class="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-md text-center">
            <Card class="p-8">
                <div class="flex flex-col items-center gap-4">
                    <div class="rounded-full bg-destructive/10 p-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="text-destructive h-8 w-8"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-2xl font-bold">Access Denied</h1>
                        <p class="text-muted-foreground mt-2">
                            {{ message || 'You do not have permission to access this page.' }}
                        </p>
                    </div>
                    <div class="flex gap-2">
                        <Button @click="goBack" variant="outline">Go Back</Button>
                        <Button @click="logout">Logout</Button>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Button } from '~~/layers/dashboard/components/ui/button';
    import { Card } from '~~/layers/dashboard/components/ui/card';

    definePageMeta({
        layout: 'auth',
    });

    const route = useRoute();
    const router = useRouter();
    const { logout } = useAuth();

    const message = computed(() => route.query.message as string);

    const goBack = () => {
        router.back();
    };
</script>
