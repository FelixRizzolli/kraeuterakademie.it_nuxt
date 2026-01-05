<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>{{ t('dashboard.pages.feedback.title') }}</CardTitle>
            <CardDescription> {{ t('dashboard.pages.feedback.description') }} </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div class="grid w-full items-center gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Field>
                            <FieldLabel for="title">
                                {{ t('dashboard.pages.feedback.formular.title.label') }}
                            </FieldLabel>
                            <Input id="title" v-model="title" type="text" required :disabled="loading" />
                            <FieldDescription>
                                {{ t('dashboard.pages.feedback.formular.title.description') }}
                            </FieldDescription>
                        </Field>
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <div v-if="loading" class="rounded-lg p-4 bg-muted">
                            <p>
                                {{
                                    t('dashboard.pages.state.loading', {
                                        type: t('dashboard.pages.feedback.ticket-categories'),
                                    })
                                }}
                            </p>
                        </div>

                        <div v-else-if="error" class="rounded-lg p-4 bg-destructive/15 text-destructive">
                            <p>{{ error }}</p>
                        </div>

                        <Field v-else-if="dashboardTicketCategories && dashboardTicketCategories.length > 0">
                            <FieldLabel for="email">
                                {{ t('dashboard.pages.feedback.formular.ticket-category.label') }}
                            </FieldLabel>
                            <Select>
                                <SelectTrigger class="w-[180px]">
                                    <SelectValue placeholder="" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <template v-for="category in dashboardTicketCategories" :key="category?.id">
                                            <SelectItem :value="category?.id || ''">
                                                {{ category?.title }}
                                            </SelectItem>
                                        </template>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FieldDescription>
                                {{ t('dashboard.pages.feedback.formular.ticket-category.description') }}
                            </FieldDescription>
                        </Field>

                        <div v-else class="rounded-lg p-4 bg-destructive/15 text-destructive">
                            <p>
                                {{
                                    t('dashboard.pages.state.not-found', {
                                        type: t('dashboard.pages.feedback.ticket-categories'),
                                    })
                                }}
                            </p>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <Field>
                            <FieldLabel for="description">
                                {{ t('dashboard.pages.feedback.formular.description.label') }}
                            </FieldLabel>
                            <Textarea
                                class="min-h-[120px]"
                                id="description"
                                v-model="description"
                                type="text"
                                required
                                :disabled="loading"
                            />
                            <FieldDescription>
                                {{ t('dashboard.pages.feedback.formular.description.description') }}
                            </FieldDescription>
                        </Field>
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
            <Button class="w-full" v-if="dashboardTicketCategories && dashboardTicketCategories.length > 0">
                {{ t('dashboard.pages.feedback.formular.submit-button') }}
            </Button>
        </CardFooter>
    </Card>
</template>

<script setup lang="ts">
    import { Button } from '~~/layers/dashboard/components/ui/button';
    import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
    } from '~~/layers/dashboard/components/ui/card';
    import { Field, FieldDescription, FieldLabel } from '~~/layers/dashboard/components/ui/field';
    import { Input } from '~~/layers/dashboard/components/ui/input';
    import { Textarea } from '~~/layers/dashboard/components/ui/textarea';
    import {
        Select,
        SelectContent,
        SelectGroup,
        SelectItem,
        SelectTrigger,
        SelectValue,
    } from '~~/layers/dashboard/components/ui/select';

    import { useI18n } from 'vue-i18n';
    import { useDashboardTicketCategories } from '~~/layers/dashboard/composables/queries/useDashboardTicketCategories';

    const { t } = useI18n();

    const dashboardTicketCategories = ref<Array<DashboardTicketCategory | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchDashboardTicketCategories = useDashboardTicketCategories();
            dashboardTicketCategories.value = (await fetchDashboardTicketCategories()) || [];

            if (!dashboardTicketCategories.value) {
                error.value = t('dashboard.pages.state.not-found', {
                    type: t('dashboard.pages.feedback.ticket-categories'),
                });
                console.warn('⚠️ No dashboard ticket categories found');
            } else {
                console.log('✅ Dashboard ticket categories loaded:', dashboardTicketCategories.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.state.error', {
                    type: t('dashboard.pages.feedback.ticket-categories'),
                });
            console.error('❌ Error loading dashboard ticket categories:', err);
        } finally {
            loading.value = false;
        }
    });
</script>
