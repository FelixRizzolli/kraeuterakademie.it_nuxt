<template>
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="bg-muted/50 aspect-video rounded-xl" />
        <div class="bg-muted/50 aspect-video rounded-xl" />
        <div class="bg-muted/50 aspect-video rounded-xl" />
    </div>
    <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });

    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';
    import { useRoute } from 'vue-router';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    const route = useRoute();

    const version = Array.isArray(route.params.version) ? route.params.version.join('/') : (route.params.version ?? '');

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.changelog.breadcrumb-title'), url: '/dashboard/changelog' },
        { text: version || t('dashboard.pages.changelog.breadcrumb-title') },
    ]);
</script>
