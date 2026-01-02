<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">{{ $t('dashboard.auth.register.title') }}</h1>
                            <p class="text-muted-foreground text-sm text-balance">
                                {{ $t('dashboard.auth.register.description') }}
                            </p>
                        </div>
                        <Field>
                            <FieldLabel for="email"> {{ $t('dashboard.auth.register.email.title') }} </FieldLabel>
                            <Input id="email" type="email" placeholder="m@example.com" required />
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
                                    <Input id="password" type="password" required />
                                </Field>
                                <Field>
                                    <FieldLabel for="confirm-password">
                                        {{ $t('dashboard.auth.register.password.confirmTitle') }}
                                    </FieldLabel>
                                    <Input id="confirm-password" type="password" required />
                                </Field>
                            </Field>
                            <FieldDescription>
                                {{ $t('dashboard.auth.register.password.description') }}
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel for="otp">
                                {{ $t('dashboard.auth.register.invitationToken.title') }}
                            </FieldLabel>
                            <FieldInputOTP id="otp" />
                            <FieldDescription>
                                {{ $t('dashboard.auth.register.invitationToken.description') }}
                            </FieldDescription>
                        </Field>
                        <Field>
                            <Button type="submit"> {{ $t('dashboard.auth.register.submitButton') }} </Button>
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

    const dashboardGlobalStore = useDashboardGlobalStore();

    const registerImage = computed(() => {
        return dashboardGlobalStore?.data?.globals?.registerImage;
    });

    const props = defineProps<{
        class?: HTMLAttributes['class'];
    }>();
</script>
