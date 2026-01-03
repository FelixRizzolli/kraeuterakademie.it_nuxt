<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8" @submit.prevent="handleRegister">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">{{ $t('dashboard.auth.register.title') }}</h1>
                            <p class="text-muted-foreground text-sm text-balance">
                                {{ $t('dashboard.auth.register.description') }}
                            </p>
                        </div>

                        <!-- Error message -->
                        <div v-if="errorMessage" class="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                            {{ errorMessage }}
                        </div>

                        <Field>
                            <FieldLabel for="email"> {{ $t('dashboard.auth.register.email.title') }} </FieldLabel>
                            <Input
                                id="email"
                                v-model="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                :disabled="isLoading"
                            />
                            <FieldDescription>
                                {{ $t('dashboard.auth.register.email.description') }}
                            </FieldDescription>
                        </Field>
                        <Field>
                            <Field class="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel for="password">
                                        {{ $t('dashboard.auth.register.password.title') }}
                                    </FieldLabel>
                                    <Input
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required
                                        :disabled="isLoading"
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel for="confirm-password">
                                        {{ $t('dashboard.auth.register.password.confirmTitle') }}
                                    </FieldLabel>
                                    <Input
                                        id="confirm-password"
                                        v-model="confirmPassword"
                                        type="password"
                                        required
                                        :disabled="isLoading"
                                    />
                                </Field>
                            </Field>
                            <FieldDescription v-if="passwordError" class="text-destructive">
                                {{ passwordError }}
                            </FieldDescription>
                            <FieldDescription v-else>
                                {{ $t('dashboard.auth.register.password.description') }}
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel for="otp">
                                {{ $t('dashboard.auth.register.invitationToken.title') }}
                            </FieldLabel>
                            <FieldInputOTP id="otp" v-model="invitationToken" :disabled="isLoading" />
                            <FieldDescription>
                                {{ $t('dashboard.auth.register.invitationToken.description') }}
                            </FieldDescription>
                        </Field>
                        <Field>
                            <Button type="submit" :disabled="isLoading || !isFormValid">
                                <span v-if="isLoading">{{
                                    $t('dashboard.auth.register.submitting') || 'Registering...'
                                }}</span>
                                <span v-else>{{ $t('dashboard.auth.register.submitButton') }}</span>
                            </Button>
                        </Field>
                        <FieldDescription class="text-center">
                            {{ $t('dashboard.auth.register.signinLink.description') }}
                            <a href="/login">{{ $t('dashboard.auth.register.signinLink.action') }}</a>
                        </FieldDescription>
                    </FieldGroup>
                </form>
                <div class="bg-muted relative hidden md:block">
                    <DashboardImg
                        v-if="registerImage"
                        :image="registerImage"
                        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        loading="eager"
                    />
                </div>
            </CardContent>
        </Card>
        <FieldDescription class="px-6 text-center">
            <i18n-t keypath="dashboard.auth.register.disclaimer.text" tag="span">
                <template #terms>
                    <a href="/terms">{{ $t('dashboard.auth.register.disclaimer.terms') }}</a>
                </template>
                <template #privacy>
                    <a href="/privacy">{{ $t('dashboard.auth.register.disclaimer.privacy') }}</a>
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
    import {
        Field,
        FieldDescription,
        FieldGroup,
        FieldLabel,
        FieldSeparator,
        FieldInputOTP,
    } from '~~/layers/dashboard/components/ui/field';
    import { Input } from '~~/layers/dashboard/components/ui/input';

    import { useDashboardGlobalStore } from '~~/layers/dashboard/stores/dashboardGlobalStore';
    import { useAuth } from '~~/layers/dashboard/composables/useAuth';

    const dashboardGlobalStore = useDashboardGlobalStore();
    const { register } = useAuth();
    const router = useRouter();

    const registerImage = computed(() => {
        return dashboardGlobalStore?.data?.globals?.registerImage;
    });

    const props = defineProps<{
        class?: HTMLAttributes['class'];
    }>();

    // Form state
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const invitationToken = ref('');
    const isLoading = ref(false);
    const errorMessage = ref('');

    // Validation
    const passwordError = computed(() => {
        if (!password.value || !confirmPassword.value) return '';
        if (password.value !== confirmPassword.value) {
            return 'Passwords do not match';
        }
        if (password.value.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        return '';
    });

    const isFormValid = computed(() => {
        return email.value && password.value && confirmPassword.value && invitationToken.value && !passwordError.value;
    });

    const handleRegister = async () => {
        if (!isFormValid.value) {
            errorMessage.value = 'Please fill in all fields correctly.';
            return;
        }

        errorMessage.value = '';
        isLoading.value = true;

        try {
            const result = await register(email.value, password.value, invitationToken.value);

            if (result.success) {
                // Redirect to dashboard after successful registration and auto-login
                router.push('/dashboard');
            } else {
                errorMessage.value = result.error || 'Registration failed. Please check your invitation token.';
            }
        } catch (error: any) {
            errorMessage.value = error.message || 'An unexpected error occurred.';
        } finally {
            isLoading.value = false;
        }
    };
</script>
