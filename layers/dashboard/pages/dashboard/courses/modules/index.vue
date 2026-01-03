<template>
    <div>
        <h1>{{ t('dashboard.navigation.nav-course.course-modules.title') }}</h1>
        <p>Course modules placeholder.</p>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({ layout: 'dashboard' });
    import { useI18n } from 'vue-i18n';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.navigation.nav-course.course-modules.title') },
    ]);
</script>
