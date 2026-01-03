<template>
    <div>
        <div v-if="loading" class="flex items-center justify-center py-12">
            <p class="text-muted-foreground">Loading video lesson...</p>
        </div>

        <div v-else-if="error" class="rounded-lg bg-destructive/15 p-4 text-destructive">
            <p>{{ error }}</p>
        </div>

        <div v-else-if="videoLesson">
            <h1 class="text-2xl font-semibold mb-4">{{ videoLesson.title }}</h1>

            <div v-if="videoLesson.youtubeURL" class="mb-6">
                <div class="aspect-video rounded-xl overflow-hidden">
                    <DashboardYouTubeVideo :youtubeURL="videoLesson.youtubeURL" class="w-full h-full" />
                </div>
            </div>
        </div>

        <div v-else class="rounded-lg bg-muted p-4">
            <p class="text-muted-foreground">Video lesson not found</p>
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
    import FIND_COURSE_VIDEO_LESSONS from '~/graphql/queries/dashboard/findCourseVideoLesson.gql';
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';

    const { t } = useI18n();
    const { set } = useBreadcrumbs();
    const route = useRoute();

    const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : (route.params.slug ?? '');

    set([
        { text: t('dashboard.pages.dashboard.breadcrumb-title'), url: '/dashboard' },
        { text: t('dashboard.pages.study.breadcrumb-title'), url: '/dashboard/study' },
        { text: t('dashboard.pages.study.video-lessons.breadcrumb-title'), url: '/dashboard/study/video-lessons' },
        { text: slug || t('dashboard.pages.study.video-lessons.breadcrumb-title') },
    ]);

    const useCourseVideoLesson = () => {
        const getCourseVideoLessonQuery = `
            ${FIND_COURSE_VIDEO_LESSONS?.loc?.source?.body}
        `;

        const gqlQuery = usePayloadGraphQL();

        const fetchCourseVideoLesson = async (slug: string): Promise<any> => {
            const response = await gqlQuery<any>(getCourseVideoLessonQuery, {
                where: {
                    slug: {
                        equals: slug,
                    },
                },
            });

            return response.data?.CourseVideoLessons?.docs?.[0] || null;
        };

        return fetchCourseVideoLesson;
    };

    const videoLesson = ref<any>(null);
    const loading = ref(true);
    const error = ref<string | null>(null);

    onMounted(async () => {
        try {
            const fetchLesson = useCourseVideoLesson();
            videoLesson.value = await fetchLesson(slug);

            if (!videoLesson.value) {
                error.value = 'Video lesson not found';
                console.warn('⚠️ No video lesson found for slug:', slug);
            } else {
                console.log('✅ Video lesson loaded:', videoLesson.value);
            }
        } catch (err: any) {
            error.value = err?.message ?? 'Failed to load video lesson';
            console.error('❌ Error loading video lesson:', err);
        } finally {
            loading.value = false;
        }
    });
</script>
