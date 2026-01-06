<template>
    <div v-if="ticketDetails">
        <div class="space-y-1">
            <h1 class="text-xl font-medium leading-none">{{ ticketDetails.title }}</h1>
            <div class="flex mt-2 mb-4">
                <Badge variant="secondary">
                    {{ ticketDetails.status }}
                </Badge>
                <Badge variant="secondary" class="ml-1">
                    {{ ticketDetails.priority }}
                </Badge>
            </div>
            <p class="text-base">{{ ticketDetails.description }}</p>
        </div>
        <Separator class="my-4" />
        <div class="flex justify-between">
            <p class="text-sm size-max text-muted-foreground">
                {{ ticketDetails.author.firstName + ' ' + ticketDetails.author.lastName }}
            </p>
            <p class="text-sm size-max text-muted-foreground">{{ ticketDetails.createdAt }}</p>
        </div>

        <div class="pl-6 mt-8">
            <div v-for="comment in ticketDetails.comments" class="mt-4">
                <p class="text-sm size-max text-muted-foreground">
                    {{ comment.createdAt + ' - ' + comment.commenter?.firstName + ' ' + comment.commenter?.lastName }}
                </p>
                <p class="text-base">
                    {{ comment.commentText }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n';
    import { useDashboardTicketDetails } from '~~/layers/dashboard/composables/queries/useDashboardTicketDetails';

    interface FeedbackTicketDetailsProps {
        ticketId: string;
    }

    const props = defineProps<FeedbackTicketDetailsProps>();

    const { t } = useI18n();

    const ticketDetails = ref<DashboardTicket>();
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const ticketId = Number(props.ticketId);

            const fetchDashboardTicketDetails = useDashboardTicketDetails();
            ticketDetails.value = (await fetchDashboardTicketDetails(ticketId)) || {};

            if (!ticketDetails.value) {
                error.value = t('dashboard.pages.state.not-found', {
                    type: t('dashboard.pages.feedback.ticket'),
                });
                console.warn('⚠️ No dashboard ticket found');
            } else {
                console.log('✅ Dashboard ticket loaded:', ticketDetails.value);
            }
        } catch (err: any) {
            error.value =
                err?.message ??
                t('dashboard.pages.state.error', {
                    type: t('dashboard.pages.feedback.ticket'),
                });
            console.error('❌ Error loading dashboard ticket:', err);
        } finally {
            loading.value = false;
        }
    });
</script>
