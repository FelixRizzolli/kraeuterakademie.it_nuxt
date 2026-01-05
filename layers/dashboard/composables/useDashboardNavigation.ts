import { computed } from 'vue';
import useDashboardUserStore from '../stores/dashboardUserStore';
import { useI18n } from 'vue-i18n';

import {
    BookOpenText,
    Video,
    GraduationCap,
    CalendarDays,
    LifeBuoy,
    Send,
    FileClock,
    NotebookPen,
} from 'lucide-vue-next';

export type NavItem = {
    title: string;
    url?: string;
    icon?: any;
    items?: NavItem[];
};

export type NavGroup = {
    title: string;
    url?: string;
    icon?: any;
    items?: NavItem[];
};

export function useDashboardNavigation(
    opts: { userStore?: ReturnType<typeof useDashboardUserStore>; t?: (k: string) => string } = {},
) {
    const userStore = opts.userStore ?? useDashboardUserStore();
    const { t } = useI18n();

    const navStudy = computed<NavGroup[]>(() => {
        const videoItems =
            (userStore.data?.accessibleVideoLessons as Array<CourseVideoLesson>)?.map((v: CourseVideoLesson) => ({
                title: v.title,
                url: `/dashboard/study/video-lessons/${v.slug}`,
            })) ?? [];

        return [
            {
                title: t('dashboard.navigation.nav-study.video-lessons'),
                url: '/dashboard/study/video-lessons',
                icon: Video,
                items: videoItems,
            },
            {
                title: t('dashboard.navigation.nav-study.plant-lexicon.title'),
                url: '/dashboard/study/plant-lexicon',
                icon: BookOpenText,
                items: [
                    {
                        title: t('dashboard.navigation.nav-study.plant-lexicon.items.plants'),
                        url: '/dashboard/study/plant-lexicon/plants',
                    },
                    {
                        title: t('dashboard.navigation.nav-study.plant-lexicon.items.poison-plants'),
                        url: '/dashboard/study/plant-lexicon/poison-plants',
                    },
                    {
                        title: t('dashboard.navigation.nav-study.plant-lexicon.items.plant-families'),
                        url: '/dashboard/study/plant-lexicon/plant-families',
                    },
                    // {
                    //     title: t('dashboard.navigation.nav-study.plant-lexicon.items.catalogue'),
                    //     url: '/dashboard/study/plant-lexicon/catalogue',
                    // },
                ],
            },
            // {
            //     title: t('dashboard.navigation.nav-study.quiz.title'),
            //     url: '#',
            //     icon: NotebookPen,
            //     items: [
            //         {
            //             title: t('dashboard.navigation.nav-study.quiz.items.plants-practice'),
            //             url: '/dashboard/study/quiz/plants-practice',
            //         },
            //         {
            //             title: t('dashboard.navigation.nav-study.quiz.items.plants-theory'),
            //             url: '/dashboard/study/quiz/plants-theory',
            //         },
            //         {
            //             title: t('dashboard.navigation.nav-study.quiz.items.plants-poison'),
            //             url: '/dashboard/study/quiz/plants-poison',
            //         },
            //         {
            //             title: t('dashboard.navigation.nav-study.quiz.items.catalogue'),
            //             url: '/dashboard/study/quiz/catalogue',
            //         },
            //     ],
            // },
        ];
    });

    const navCourse = computed<NavGroup[]>(() => {
        const enrolledCourses =
            (userStore.data?.enrolledCourses as Array<Course>)?.map((v: Course) => ({
                title: v.name,
                url: `/dashboard/courses/${v.name.toLowerCase()}`,
            })) ?? [];

        return [
            {
                title: t('dashboard.navigation.nav-course.courses.title'),
                url: '/dashboard/courses',
                icon: GraduationCap,
                items: [
                    ...enrolledCourses,
                    //     {
                    //         title: t('dashboard.navigation.nav-course.courses.items.documents'),
                    //         url: '/dashboard/courses/documents',
                    //     },
                ],
            },
            {
                title: t('dashboard.navigation.nav-course.course-modules.title'),
                url: '/dashboard/courses/modules',
                icon: CalendarDays,
            },
        ];
    });

    const navSecondary = computed<NavItem[]>(() => [
        {
            title: t('dashboard.navigation.nav-secondary.help'),
            url: '/dashboard/help',
            icon: LifeBuoy,
        },
        {
            title: t('dashboard.navigation.nav-secondary.feedback'),
            url: '/dashboard/feedback',
            icon: Send,
        },
        {
            title: t('dashboard.navigation.nav-secondary.changelog'),
            url: '/dashboard/changelog',
            icon: FileClock,
        },
    ]);

    async function ensureLoaded() {
        if (store && typeof store.ensureLoaded === 'function') {
            await store.ensureLoaded();
        }
    }

    return {
        navStudy,
        navCourse,
        navSecondary,
        ensureLoaded,
    };
}

export default useDashboardNavigation;
