<template>
    <div>
        <h1 class="text-2xl font-semibold mb-4">{{ lessonTitle }}</h1>

        <div v-if="lessonYouTubeURL" class="mb-6">
            <div class="aspect-video rounded-xl overflow-hidden">
                <DashboardYouTubeVideo :youtubeURL="lessonYouTubeURL" class="w-full h-full" />
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

    // Fetch the course video lesson by id (slug is the id)
    const config = useRuntimeConfig();

    const { data: lessonData } = await useAsyncData(
        () => `course-video-lesson-${slug}`,
        async () => {
            const id = parseInt(String(slug), 10);
            if (Number.isNaN(id)) return null;

            const query = `query getCourseVideoLesson($courseVideoLessonId: Int!) {\n  CourseVideoLesson(id: $courseVideoLessonId) {\n    title\n    youtubeURL\n    id\n  }\n}`;

            const res = await $fetch(`${config.public.payloadApiUrl}/api/graphql`, {
                method: 'POST',
                body: { query, variables: { courseVideoLessonId: id } },
            });

            return res;
        },
        { watch: [() => slug] },
    );

    const lessonYouTubeURL = computed(() => lessonData.value?.data?.CourseVideoLesson?.youtubeURL ?? '');
    const lessonTitle = computed(() => lessonData.value?.data?.CourseVideoLesson?.title ?? '');
</script>
