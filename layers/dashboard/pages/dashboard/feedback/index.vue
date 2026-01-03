<template>
    <div>
        <h1>{{ t('dashboard.pages.feedback.breadcrumb-title') || 'Feedback' }}</h1>
        <p>Feedback placeholder page.</p>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });
    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.feedback.breadcrumb-title') || 'Feedback' },
    ]);
</script>
