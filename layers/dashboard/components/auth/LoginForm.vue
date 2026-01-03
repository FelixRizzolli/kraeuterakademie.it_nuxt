<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8" @submit.prevent="handleLogin">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">{{ $t('dashboard.auth.login.title') }}</h1>
                            <p class="text-muted-foreground text-balance">
                                {{ $t('dashboard.auth.login.description') }}
                            </p>
                        </div>

                        <!-- Error message -->
                        <div v-if="errorMessage" class="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                            {{ errorMessage }}
                        </div>

                        <Field>
                            <FieldLabel for="email"> {{ $t('dashboard.auth.login.email.title') }} </FieldLabel>
                            <Input
                                id="email"
                                v-model="email"
                                type="email"
                                :placeholder="'m@example.com'"
                                required
                                :disabled="isLoading"
                            />
                        </Field>
                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="password">
                                    {{ $t('dashboard.auth.login.password.title') }}
                                </FieldLabel>
                                <a href="#" class="ml-auto text-sm underline-offset-2 hover:underline">
                                    {{ $t('dashboard.auth.login.password.forgot') }}
                                </a>
                            </div>
                            <Input id="password" v-model="password" type="password" required :disabled="isLoading" />
                        </Field>
                        <Field>
                            <Button type="submit" :disabled="isLoading">
                                <span v-if="isLoading">{{
                                    $t('dashboard.auth.login.submitting') || 'Logging in...'
                                }}</span>
                                <span v-else>{{ $t('dashboard.auth.login.submitButton') }}</span>
                            </Button>
                        </Field>
                        <FieldDescription class="text-center">
                            {{ $t('dashboard.auth.login.signupLink.description') }}
                            <a href="/register"> {{ $t('dashboard.auth.login.signupLink.action') }} </a>
                        </FieldDescription>
                    </FieldGroup>
                </form>
                <div class="bg-muted relative hidden md:block">
                    <DashboardImg
                        v-if="loginImage"
                        :image="loginImage"
                        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        loading="eager"
                    />
                </div>
            </CardContent>
        </Card>
        <FieldDescription class="px-6 text-center">
            <i18n-t keypath="dashboard.auth.login.disclaimer.text" tag="span">
                <template #terms>
                    <a href="/terms">{{ $t('dashboard.auth.login.disclaimer.terms') }}</a>
                </template>
                <template #privacy>
                    <a href="/privacy">{{ $t('dashboard.auth.login.disclaimer.privacy') }}</a>
                </template>
            </i18n-t>
        </FieldDescription>
    </div>
</template>

<script setup lang="ts">
    import type { HTMLAttributes } from 'vue';
    import { cn } from '~~/layers/dashboard/lib/utils';
    import { Button } from '~~/layers/dashboard/components/ui/button';
    import { Card, CardContent } from '~~/layers/dashboard/components/ui/card';
    import { Field, FieldDescription, FieldGroup, FieldLabel } from '~~/layers/dashboard/components/ui/field';
    import { Input } from '~~/layers/dashboard/components/ui/input';

    import { useDashboardGlobalStore } from '~~/layers/dashboard/stores/dashboardGlobalStore';
    import { useDashboardUserStore } from '~~/layers/dashboard/stores/dashboardUserStore';
    import { useAuth } from '~~/layers/dashboard/composables/useAuth';

    const dashboardGlobalStore = useDashboardGlobalStore();
    const { login } = useAuth();
    const router = useRouter();

    const loginImage = computed(() => {
        return dashboardGlobalStore?.data?.globals?.loginImage;
    });

    const props = defineProps<{
        class?: HTMLAttributes['class'];
    }>();

    // Form state
    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);
    const errorMessage = ref('');

    const handleLogin = async () => {
        errorMessage.value = '';
        isLoading.value = true;

        try {
            const result = await login(email.value, password.value);

            if (result.success) {
                // Prefetch user data (non-blocking) - components will ensure it's loaded if needed
                const userStore = useDashboardUserStore();
                const userId = Number(result.user?.id || -1);
                if (userId > 0) {
                    userStore.loadForUser(userId).catch((err) => {
                        console.error('Failed to prefetch dashboard user data:', err);
                    });
                }
                // Redirect to dashboard after successful login
                router.push('/dashboard');
            } else {
                errorMessage.value = result.error || 'Login failed. Please try again.';
            }
        } catch (error: any) {
            errorMessage.value = error.message || 'An unexpected error occurred.';
        } finally {
            isLoading.value = false;
        }
    };
</script>
