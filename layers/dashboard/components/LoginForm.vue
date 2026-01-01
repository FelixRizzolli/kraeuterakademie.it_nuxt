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
                            <h1 class="text-2xl font-bold">Welcome back</h1>
                            <p class="text-muted-foreground text-balance">Login to your Acme Inc account</p>
                        </div>
                        <Field>
                            <FieldLabel for="email"> Email </FieldLabel>
                            <Input id="email" type="email" placeholder="m@example.com" required />
                        </Field>
                        <Field>
                            <div class="flex items-center">
                                <FieldLabel for="password"> Password </FieldLabel>
                                <a href="#" class="ml-auto text-sm underline-offset-2 hover:underline">
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </Field>
                        <Field>
                            <Button type="submit"> Login </Button>
                        </Field>
                        <FieldDescription class="text-center">
                            Don't have an account?
                            <a href="/register"> Sign up </a>
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
