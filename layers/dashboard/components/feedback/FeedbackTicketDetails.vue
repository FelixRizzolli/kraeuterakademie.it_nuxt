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
        <Separator class="my-6" />
        <!-- Comment Form -->
        <div class="mt-6">
            <h3 class="text-lg font-medium mb-4">{{ t('dashboard.pages.feedback.comment.add') || 'Add Comment' }}</h3>
            <div class="space-y-4">
                <Field>
                    <FieldLabel for="comment">
                        {{ t('dashboard.pages.feedback.comment.text') || 'Comment' }}
                    </FieldLabel>
                    <Textarea
                        class="min-h-[100px]"
                        id="comment"
                        v-model="newComment"
                        :placeholder="t('dashboard.pages.feedback.comment.placeholder') || 'Write your comment here...'"
                        :disabled="submittingComment"
                    />
                </Field>
                <div v-if="commentError" class="rounded-lg p-4 bg-destructive/15 text-destructive">
                    <p>{{ commentError }}</p>
                </div>
                <div v-if="commentSuccess" class="rounded-lg p-4 bg-green-500/15 text-green-700">
                    <p>{{ commentSuccess }}</p>
                </div>
                <Button @click="handleAddComment" :disabled="submittingComment || !newComment.trim()">
                    {{
                        submittingComment
                            ? t('dashboard.pages.state.loading', { type: '' }) || 'Loading...'
                            : t('dashboard.pages.feedback.comment.submit') || 'Submit Comment'
                    }}
                </Button>
            </div>
        </div>
        <!-- Comments List -->
        <div class="pl-6 mt-8">
            <h3 class="text-lg font-medium mb-4">{{ t('dashboard.pages.feedback.comment.comments') || 'Comments' }}</h3>
            <div
                v-if="!ticketDetails.comments || ticketDetails.comments.length === 0"
                class="text-sm text-muted-foreground"
            >
                {{ t('dashboard.pages.feedback.comment.no-comments') || 'No comments yet.' }}
            </div>
            <div
                v-for="comment in ticketDetails.comments"
                :key="comment.createdAt"
                class="mt-4 p-4 rounded-lg bg-muted/50"
            >
                <p class="text-sm size-max text-muted-foreground mb-2">
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
    import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';
    import { useDashboardUserStore } from '~~/layers/dashboard/stores/dashboardUserStore';
    import { Button } from '~~/layers/dashboard/components/ui/button';
    import { Field, FieldLabel } from '~~/layers/dashboard/components/ui/field';
    import { Textarea } from '~~/layers/dashboard/components/ui/textarea';
    import { Separator } from '~~/layers/dashboard/components/ui/separator';
    import { Badge } from '~~/layers/dashboard/components/ui/badge';
    import UPDATE_DASHBOARD_TICKET from '~/graphql/mutations/dashboard/updateDashboardTicket.gql';
    interface FeedbackTicketDetailsProps {
        ticketId: string;
    }
    const props = defineProps<FeedbackTicketDetailsProps>();
    const { t } = useI18n();
    const userStore = useDashboardUserStore();

    // Ticket details data
    const ticketDetails = ref<DashboardTicket>();

    // State
    const loading = ref(true);
    const error = ref<string | null>(null);

    // Comment Form data
    const newComment = ref('');
    const submittingComment = ref(false);
    const commentError = ref<string | null>(null);
    const commentSuccess = ref<string | null>(null);

    const loadTicketDetails = async () => {
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
    };

    onMounted(async () => {
        await loadTicketDetails();
    });

    const handleAddComment = async () => {
      // Reset messages
      commentError.value = null;
      commentSuccess.value = null;

      // Validate comment text
      if (!newComment.value || !newComment.value.trim()) {
        commentError.value = t('dashboard.pages.feedback.comment.required') || 'Comment text is required';
        return;
      }

      // Ensure user is logged in
      if (!userStore.userId) {
        commentError.value = 'You must be logged in to add a comment';
        console.error('❌ User ID not found in store');
        return;
      }

      submittingComment.value = true;

      try {
        const gqlQuery = usePayloadGraphQL();
        const mutationQuery = UPDATE_DASHBOARD_TICKET?.loc?.source?.body || '';

        // Get existing comments and extract only the IDs
        const existingComments = (ticketDetails.value?.comments || [])
            .map((comment) => {
              // Handle null, object, or number commenter
              let commenterId: number | null = null;
              if (comment.commenter) {
                if (typeof comment.commenter === 'object') {
                  commenterId = comment.commenter.id;
                } else {
                  commenterId = comment.commenter;
                }
              }
              return {
                commenter: commenterId,
                commentText: comment.commentText,
                createdAt: comment.createdAt,
              };
            })
            .filter((comment) => comment.commenter !== null); // Filter out comments with null commenter

        const newCommentData = {
          commenter: userStore.userId,
          commentText: newComment.value.trim(),
          createdAt: new Date().toISOString(),
        };

        const response = await gqlQuery<any>(mutationQuery, {
          updateDashboardTicketId: Number(props.ticketId),
          data: {
            comments: [...existingComments, newCommentData],
          },
        });

        if (response?.errors && response.errors.length) {
          console.error('GraphQL errors when adding comment:', response.errors);
          throw new Error(response.errors[0]?.message || 'Failed to add comment');
        }

        if (response?.data?.updateDashboardTicket) {
          commentSuccess.value = t('dashboard.pages.feedback.comment.success') || 'Comment added successfully!';
          // Reset form
          newComment.value = '';
          // Reload ticket details to show the new comment
          await loadTicketDetails();
          // Clear success message after 3 seconds
          setTimeout(() => {
            commentSuccess.value = null;
          }, 3000);
        } else {
          throw new Error('Failed to add comment');
        }
      } catch (err: any) {
        commentError.value = err?.message || 'Failed to add comment. Please try again.';
        console.error('❌ Error adding comment:', err);
      } finally {
        submittingComment.value = false;
      }
    };
</script>
