<template>
    <div class="flex flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <div :class="cn('flex flex-col gap-6')">
                <div v-if="loading" class="loading-state"></div>

                <div v-else-if="error" class="error-state">
                    <NuxtErrorBoundary :error="error" />
                </div>

                <template v-else-if="pageData?.contentComponents?.length">
                    <h1 class="text-2xl font-semibold">
                        {{ pageData.meta?.title }}
                    </h1>

                    <ContentComponentRenderer
                        v-for="(cc, index) in pageData.contentComponents"
                        :key="index"
                        :name="cc.name"
                        :data="cc.data"
                        :settings="cc.settings"
                    />
                </template>

                <div v-else class="no-content">
                    <p>{{ t('dashboard.pages.changelog.no-content') }}</p>
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
    import { useDashboardChangelog } from '~~/layers/dashboard/composables/queries/useDashboardChangelog';

    import ContentComponentRenderer from '~~/layers/dashboard/components/dashboard/ContentComponentRenderer';

    import { useRoute } from 'vue-router';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    const route = useRoute();

    import { showError } from '#app';

    const version = Array.isArray(route.params.version) ? route.params.version.join('/') : (route.params.version ?? '');

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.changelog.breadcrumb-title'), url: '/dashboard/changelog' },
        { text: version || t('dashboard.pages.changelog.breadcrumb-title') },
    ]);

    const pageData = ref<any>({});
    const loading = ref(true);
    const error = ref<string | null>(null);

    const loadDashboardPage = async () => {
        loading.value = true;
        error.value = null;

        try {
            let pageVersion: string = 'index';
            if (route.params.version && route.params.version?.length > 0) {
                pageVersion = route.params.version[0] ?? 'index';
            }

            const findDashboardChangelog = useDashboardChangelog();
            pageData.value = await findDashboardChangelog(pageVersion);

            if (!pageData.value) {
                showError({
                    statusCode: 404,
                    statusMessage: 'Page Not Found',
                    data: {
                        myCustomField: true,
                    },
                });
            }
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('Error loading page:', err);
            showError({
                statusCode: 500,
                statusMessage: error.value,
            });
        } finally {
            loading.value = false;
        }
    };

    watch(
        () => pageData.value?.meta,
        (meta: any) => {
            if (!meta) return;

            useSeoConfig(pageData?.value?.meta);
        },
        { immediate: true },
    );

    // Load page data on component mount
    onMounted(() => {
        loadDashboardPage();
    });
</script>

<style lang="scss" scoped></style>
