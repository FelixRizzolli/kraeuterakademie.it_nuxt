<template>
    <div>
        <h1>{{ t('dashboard.navigation.nav-study.quiz.items.plants-theory') }}</h1>
        <p>Quiz - plants theory placeholder.</p>
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
        { text: t('dashboard.navigation.nav-study.title'), url: '/dashboard/study' },
        { text: t('dashboard.navigation.nav-study.quiz.title'), url: '/dashboard/study/quiz' },
        { text: t('dashboard.navigation.nav-study.quiz.items.plants-theory') },
    ]);
</script>
