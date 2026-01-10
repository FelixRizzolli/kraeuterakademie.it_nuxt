<template>
    <div class="flex flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <div :class="cn('flex flex-col gap-6')">
                <h1 class="text-2xl font-semibold mb-4">
                    {{ t('dashboard.navigation.nav-secondary.changelog') }}
                </h1>

                <div v-if="loading" class="flex items-center justify-center py-12">
                    <p class="text-muted-foreground">
                        {{
                            t('dashboard.pages.state.loading', {
                                type: t('dashboard.pages.changelog.title'),
                            })
                        }}
                    </p>
                </div>

                <div v-else-if="error" class="rounded-lg bg-destructive/15 p-4 text-destructive">
                    <p>{{ error }}</p>
                </div>

                <div v-else-if="changelogs && changelogs.length">
                    <Table>
                        <TableCaption>{{ t('dashboard.pages.changelog.table-caption') }}</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>{{ t('dashboard.pages.changelog.table.version') }}</TableHead>
                                <TableHead>{{ t('dashboard.pages.changelog.table.releaseDate') }}</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow v-for="(changelog, index) in changelogs" :key="index">
                                <TableCell>
                                    <NuxtLink
                                        :to="`/dashboard/changelog/${changelog.version}`"
                                        class="underline hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {{ changelog.version }}
                                    </NuxtLink>
                                </TableCell>
                                <TableCell> {{ changelog.releaseDate }} </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div v-else class="rounded-lg bg-muted p-4">
                    <p class="text-muted-foreground">
                        {{
                            t('dashboard.pages.state.not-found', {
                                type: t('dashboard.pages.changelog.title'),
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
    import { useDashboardChangelogs } from '~~/layers/dashboard/composables/queries/useDashboardChangelogs';
    import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.changelog.breadcrumb-title') },
    ]);

    const changelogs = ref<Array<DashboardChangelog | null>>([]);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchChangelogs = useDashboardChangelogs();
            changelogs.value = await fetchChangelogs();

            if (!changelogs.value) {
                error.value = t('dashboard.pages.state.not-found', {
                    type: t('dashboard.pages.changelog.title'),
                });
                console.warn('⚠️ No changelogs found');
            } else {
                console.log('✅ Changelogs loaded:', changelogs.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.state.error', {
                    type: t('dashboard.pages.changelog.title'),
                });
            console.error('❌ Error loading changelogs:', err);
        } finally {
            loading.value = false;
        }
    });
</script>
