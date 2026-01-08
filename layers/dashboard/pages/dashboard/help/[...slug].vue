<template>
    <div>
        <div v-if="loading" class="loading-state"></div>

        <div v-else-if="error" class="error-state">
            <NuxtErrorBoundary :error="error" />
        </div>

        <template v-else-if="pageData">
            {{ pageData }}
        </template>

        <template v-else-if="pageData?.contentComponents?.length">
            <!-- <ContentComponentRenderer
                v-for="(cc, index) in pageData.contentComponents"
                :key="index"
                :name="cc.name"
                :data="cc.data"
                :settings="cc.settings"
            /> -->
        </template>

        <div v-else class="no-content">
            <p>No content available</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });

    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';
    import { useDashboardHelpPage } from '~~/layers/dashboard/composables/queries/useDashboardHelpPage';
    import { useRoute } from 'vue-router';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    const route = useRoute();

    import { showError } from '#app';

    const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug ?? '');

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.help.breadcrumb-title'), url: '/dashboard/help' },
        { text: slug || t('dashboard.pages.help.breadcrumb-title') },
    ]);

    const pageData = ref<any>({});
    const loading = ref(true);
    const error = ref<string | null>(null);

    const loadDashboardPage = async () => {
        loading.value = true;
        error.value = null;

        try {
            let pageSlug: string = 'index';
            if (route.params.slug && route.params.slug?.length > 0) {
                pageSlug = route.params.slug[0] ?? 'index';
            }

            const findDashboardHelpPage = useDashboardHelpPage();
            pageData.value = await findDashboardHelpPage(pageSlug);

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
