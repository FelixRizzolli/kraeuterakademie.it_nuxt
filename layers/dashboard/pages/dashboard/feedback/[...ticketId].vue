<template>
    <div class="flex flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <div :class="cn('flex flex-col gap-6')">
                <FeedbackTicketDetails v-if="ticketId" :ticketId="ticketId" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'dashboard',
        middleware: ['auth'],
    });
    import { useI18n } from 'vue-i18n';
    import { useRoute } from 'vue-router';
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';

    import { cn } from '~~/layers/dashboard/lib/utils';

    import FeedbackTicketDetails from '~~/layers/dashboard/components/feedback/FeedbackTicketDetails';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    const route = useRoute();

    const ticketId = computed(() =>
        Array.isArray(route.params.ticketId) ? route.params.ticketId.join('/') : (route.params.ticketId ?? ''),
    );

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.feedback.breadcrumb-title') || 'Feedback', url: '/dashboard/feedback' },
        { text: ticketId.value || t('dashboard.pages.feedback.breadcrumb-title') },
    ]);
</script>
