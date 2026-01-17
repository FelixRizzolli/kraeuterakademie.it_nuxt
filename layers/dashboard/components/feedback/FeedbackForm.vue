<template>
    <Card class="w-full">
        <CardHeader>
            <CardTitle>{{ t('dashboard.pages.feedback.title') }}</CardTitle>
            <CardDescription> {{ t('dashboard.pages.feedback.description') }} </CardDescription>
        </CardHeader>
        <CardContent>
            <form @submit.prevent="handleSubmit">
                <div class="grid w-full items-center gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Field>
                            <FieldLabel for="title">
                                {{ t('dashboard.pages.feedback.formular.title.label') }}
                            </FieldLabel>
                            <Input id="title" v-model="title" type="text" required :disabled="loading || submitting" />
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
                            <FieldLabel for="category">
                                {{ t('dashboard.pages.feedback.formular.ticket-category.label') }}
                            </FieldLabel>
                            <Select v-model="selectedCategory" :disabled="submitting">
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
                                :disabled="loading || submitting"
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
            <div v-if="submitError" class="w-full rounded-lg p-4 bg-destructive/15 text-destructive mb-2">
                <p>{{ submitError }}</p>
            </div>
            <div v-if="submitSuccess" class="w-full rounded-lg p-4 bg-green-500/15 text-green-700 mb-2">
                <p>{{ submitSuccess }}</p>
            </div>
            <Button
                class="w-full"
                v-if="dashboardTicketCategories && dashboardTicketCategories.length > 0"
                @click="handleSubmit"
                :disabled="submitting || loading"
            >
                {{
                    submitting
                        ? t('dashboard.pages.state.loading', { type: '' })
                        : t('dashboard.pages.feedback.formular.submit-button')
                }}
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
    import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';
    import { useDashboardUserStore } from '~~/layers/dashboard/stores/dashboardUserStore';
    import CREATE_DASHBOARD_TICKET from '~/graphql/mutations/dashboard/createDashboardTicket.gql';
    const { t } = useI18n();
    const userStore = useDashboardUserStore();

    // Form data
    const title = ref('');
    const description = ref('');
    const selectedCategory = ref('');

    // State
    const dashboardTicketCategories = ref<Array<DashboardTicketCategory | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);
    const submitting = ref(false);
    const submitError = ref<string | null>(null);
    const submitSuccess = ref<string | null>(null);

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
    const handleSubmit = async () => {
        // Reset messages
        submitError.value = null;
        submitSuccess.value = null;
        // Validate required fields
        if (!title.value || !title.value.trim()) {
            submitError.value = t('dashboard.pages.feedback.formular.title.label') + ' is required';
            return;
        }
        if (!description.value || !description.value.trim()) {
            submitError.value = t('dashboard.pages.feedback.formular.description.label') + ' is required';
            return;
        }
        if (!selectedCategory.value) {
            submitError.value = t('dashboard.pages.feedback.formular.ticket-category.label') + ' is required';
            return;
        }
        // Ensure user is logged in
        if (!userStore.userId) {
            submitError.value = 'You must be logged in to submit feedback';
            console.error('❌ User ID not found in store');
            return;
        }
        submitting.value = true;
        try {
            const gqlQuery = usePayloadGraphQL();
            const mutationQuery = CREATE_DASHBOARD_TICKET?.loc?.source?.body || '';
            const response = await gqlQuery<any>(mutationQuery, {
                data: {
                    title: title.value.trim(),
                    description: description.value.trim(),
                    author: userStore.userId,
                    category: selectedCategory.value,
                    status: 'open',
                    priority: 'medium',
                },
            });
            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when creating dashboard ticket:', response.errors);
                throw new Error(response.errors[0]?.message || 'Failed to create ticket');
            }
            if (response?.data?.createDashboardTicket) {
                submitSuccess.value =
                    t('dashboard.pages.feedback.formular.success') || 'Feedback submitted successfully!';
                // Reset form
                title.value = '';
                description.value = '';
                selectedCategory.value = '';
                // Emit event to refresh ticket list
                emit('ticket-created', response.data.createDashboardTicket);
            } else {
                throw new Error('Failed to create ticket');
            }
        } catch (err: any) {
            submitError.value = err?.message || 'Failed to submit feedback. Please try again.';
            console.error('❌ Error creating ticket:', err);
        } finally {
            submitting.value = false;
        }
    };
    const emit = defineEmits(['ticket-created']);
</script>
