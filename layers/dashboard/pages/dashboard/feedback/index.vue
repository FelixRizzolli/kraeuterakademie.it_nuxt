<template>
    <div class="flex flex-col items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <div :class="cn('flex flex-col gap-6')">
                <FeedbackForm @ticket-created="handleTicketCreated" />
                <FeedbackTicketList ref="ticketListRef" />
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
    import { useBreadcrumbs } from '~~/layers/dashboard/composables/useBreadcrumbs';
    import { cn } from '~~/layers/dashboard/lib/utils';
    import FeedbackForm from '~~/layers/dashboard/components/feedback/FeedbackForm';
    import FeedbackTicketList from '~~/layers/dashboard/components/feedback/FeedbackTicketList';
    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.feedback.breadcrumb-title') || 'Feedback' },
    ]);
    const ticketListRef = ref<InstanceType<typeof FeedbackTicketList> | null>(null);
    const handleTicketCreated = (ticket: any) => {
        console.log('✅ New ticket created:', ticket);
        // Refresh the page to show the new ticket in the list
        if (process.client) {
            window.location.reload();
        }
    };
</script>
