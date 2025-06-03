<template>
    <div>
        <div v-if="loading" class="loading-state"></div>

        <div v-else-if="error" class="error-state">
            <NuxtErrorBoundary :error="error" />
        </div>

        <template v-else-if="pageData?.contentComponents?.length">
            <ContentComponentRenderer
                v-for="(cc, index) in pageData.contentComponents"
                :key="index"
                :name="cc.name"
                :data="cc.data"
                :settings="cc.settings"
            />
        </template>

        <div v-else class="no-content">
            <p>No content available</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();
    import { showError } from '#app';

    const pageData = ref<any>({});
    const loading = ref(true);
    const error = ref<string | null>(null);

    const loadPage = async () => {
        loading.value = true;
        error.value = null;

        try {
            let pageSlug: string = 'index';
            if (route.params.slug && route.params.slug?.length > 0) {
                pageSlug = route.params.slug[0] ?? 'index';
            }

            const findPage = usePage();
            pageData.value = await findPage(pageSlug);

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
        () => pageData.value?.seo,
        (seo: any) => {
            if (!seo) return;

            useSeoConfig(pageData?.value?.seo ?? {});
        },
        { immediate: true },
    );

    // Load page data on component mount
    onMounted(() => {
        loadPage();
    });
</script>

<style lang="scss" scoped></style>
