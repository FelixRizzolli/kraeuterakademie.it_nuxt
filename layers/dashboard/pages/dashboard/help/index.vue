<template>
    <div class="flex flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <div :class="cn('flex flex-col gap-6')">
                <h1 class="text-2xl font-semibold mb-4">
                    {{ t('dashboard.navigation.nav-secondary.help') }}
                </h1>

                <div v-if="loading" class="flex items-center justify-center py-12">
                    <p class="text-muted-foreground">
                        {{
                            t('dashboard.pages.state.loading', {
                                type: t('dashboard.pages.help.title'),
                            })
                        }}
                    </p>
                </div>

                <div v-else-if="error" class="rounded-lg bg-destructive/15 p-4 text-destructive">
                    <p>{{ error }}</p>
                </div>

                <div v-else-if="helpPages && helpPages.length">
                    <Table>
                        <TableCaption>{{ t('dashboard.pages.help.table-caption') }}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{{ t('dashboard.pages.help.table.title') }}</TableHead>
                                <TableHead>{{ t('dashboard.pages.help.table.updatedAt') }}</TableHead>
                                <TableHead>{{ t('dashboard.pages.help.table.createdAt') }}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="(helpPage, index) in helpPages" :key="index">
                                <TableCell>
                                    <NuxtLink
                                        :to="`/dashboard/help/${helpPage.slug}`"
                                        class="underline hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {{ helpPage.title }}
                                    </NuxtLink>
                                </TableCell>
                                <TableCell> {{ helpPage.updatedAt }} </TableCell>
                                <TableCell> {{ helpPage.createdAt }} </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div v-else class="rounded-lg bg-muted p-4">
                    <p class="text-muted-foreground">
                        {{
                            t('dashboard.pages.state.not-found', {
                                type: t('dashboard.pages.help.title'),
                            })
                        }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });

    import { cn } from '~~/layers/dashboard/lib/utils';

    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';
    import { useDashboardHelpPages } from '~~/layers/dashboard/composables/queries/useDashboardHelpPages';
    import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.help.breadcrumb-title') },
    ]);

    const helpPages = ref<Array<DashboardHelpPage | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchHelpPages = useDashboardHelpPages();
            helpPages.value = await fetchHelpPages();

            if (!helpPages.value) {
                error.value = t('dashboard.pages.state.not-found', {
                    type: t('dashboard.pages.help.title'),
                });
                console.warn('⚠️ No help pages found');
            } else {
                console.log('✅ Help pages loaded:', helpPages.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.state.error', {
                    type: t('dashboard.pages.help.title'),
                });
            console.error('❌ Error loading help pages:', err);
        } finally {
            loading.value = false;
        }
    });
</script>
