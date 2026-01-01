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

    const props = defineProps<{
        class?: HTMLAttributes['class'];
    }>();
</script>

<template>
    <div :class="cn('flex flex-col gap-6', props.class)">
        <Card class="overflow-hidden p-0">
            <CardContent class="grid p-0 md:grid-cols-2">
                <form class="p-6 md:p-8">
                    <FieldGroup>
                        <div class="flex flex-col items-center gap-2 text-center">
                            <h1 class="text-2xl font-bold">Create your account</h1>
                            <p class="text-muted-foreground text-sm text-balance">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <Field>
                            <FieldLabel for="email"> Email </FieldLabel>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                            <FieldDescription>
                                We'll use this to contact you. We will not share your email with anyone else.
                            </FieldDescription>
                        </Field>
                        <Field>
                            <Field class="grid grid-cols-2 gap-4">
                                <Field>
                                    <FieldLabel for="password"> Password </FieldLabel>
                                    <Input id="password" type="password" required />
                                </Field>
                                <Field>
                                    <FieldLabel for="confirm-password"> Confirm Password </FieldLabel>
                                    <Input id="confirm-password" type="password" required />
                                </Field>
                            </Field>
                            <FieldDescription> Must be at least 8 characters long. </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel for="otp">Invitation Token</FieldLabel>
                            <FieldInputOTP id="otp" />
                            <FieldDescription> Enter the 8-digit code we sent to your email address. </FieldDescription>
                        </Field>
                        <Field>
                            <Button type="submit"> Create Account </Button>
                        </Field>
                        <FieldDescription class="text-center">
                            Already have an account? <a href="/login">Sign in</a>
                        </FieldDescription>
                    </FieldGroup>
                </form>
                <div class="bg-muted relative hidden md:block">
                    <img
                        src="/placeholder.svg"
                        alt="Image"
                        class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </CardContent>
        </Card>
        <FieldDescription class="px-6 text-center">
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
        </FieldDescription>
    </div>
</template>
