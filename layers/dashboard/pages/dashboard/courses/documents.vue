<template>
    <div>
        <h1>{{ t('dashboard.navigation.nav-course.courses.items.documents') }}</h1>
        <p>Course documents placeholder.</p>
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
        { text: t('dashboard.navigation.nav-course.courses.title'), url: '/dashboard/courses' },
        { text: t('dashboard.navigation.nav-course.courses.items.documents') },
    ]);
</script>
