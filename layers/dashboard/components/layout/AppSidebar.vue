<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <a href="#">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground"
                            >
                                <i-logo-small class="size-7" />
                            </div>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-medium">{{ $t('dashboard.navigation.title') }}</span>
                                <span class="truncate text-xs">{{ $t('dashboard.navigation.subtitle') }}</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <NavGroup :title="$t('dashboard.navigation.nav-course.title')" :items="data.navCourse" />
            <NavGroup :title="$t('dashboard.navigation.nav-study.title')" :items="navStudy" />
            <NavSecondary :items="data.navSecondary" class="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="userInfo" />
        </SidebarFooter>
    </Sidebar>
</template>

<script setup lang="ts">
    import type { SidebarProps } from '~~/layers/dashboard/components/ui/sidebar';

    import {
        BookOpenText,
        CalendarDays,
        FileClock,
        GraduationCap,
        LifeBuoy,
        NotebookPen,
        Send,
        Video,
    } from 'lucide-vue-next';

    import { computed } from 'vue';
    import { useAuth } from '~~/layers/dashboard/composables/useAuth';
    import {
        Sidebar,
        SidebarContent,
        SidebarFooter,
        SidebarHeader,
        SidebarMenu,
        SidebarMenuButton,
        SidebarMenuItem,
    } from '~~/layers/dashboard/components/ui/sidebar';

    import NavGroup from '~~/layers/dashboard/components/layout/NavGroup.vue';
    import NavSecondary from '~~/layers/dashboard/components/layout/NavSecondary.vue';
    import NavUser from '~~/layers/dashboard/components/layout/NavUser.vue';
    import useDashboardUserStore from '../../stores/dashboardUserStore';

    const props = withDefaults(defineProps<SidebarProps>(), {
        variant: 'inset',
    });

    const { userId, user, email, firstName, lastName } = useAuth();
    const userData = useDashboardUserStore();

    // Ensure user data is loaded when sidebar mounts
    onMounted(async () => {
        console.log('Sidebar mounted - User ID from auth:', userId.value);
        console.log('Store userId before setting:', userData.userId);

        if (userId.value) {
            const numericUserId = Number(userId.value);
            // Set userId in store first, then ensure data is loaded
            userData.setUserId(numericUserId);
            console.log('Store userId after setting:', userData.userId);

            try {
                await userData.ensureLoaded();
                console.log('User data loaded successfully:', userData.data);
            } catch (err) {
                console.error('Failed to load dashboard user data:', err);
            }
        } else {
            console.warn('No userId available from auth');
        }
    });

    const userInfo = computed(() => {
        const name =
            [firstName.value, lastName.value].filter(Boolean).join(' ') || user.value?.email || email.value || '';
        return {
            id: userId.value ?? user.value?.id ?? '',
            name: name || 'User',
            email: email.value ?? user.value?.email ?? '',
            avatar: '/avatars/shadcn.jpg',
        };
    });

    const navStudy = computed(() => {
        const videoItems =
            userData.data?.accessibleVideoLessons?.map((v: any) => ({
                title: v.title,
                url: `/dashboard/study/video-lessons/${v.slug}`,
            })) ?? [];

        return [
            {
                title: $t('dashboard.navigation.nav-study.video-lessons'),
                url: '/dashboard/study/video-lessons',
                icon: Video,
                items: videoItems,
            },
            {
                title: $t('dashboard.navigation.nav-study.plant-lexicon.title'),
                url: '/dashboard/study/plant-lexicon',
                icon: BookOpenText,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.plants'),
                        url: '/dashboard/study/plant-lexicon/plants',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.poison-plants'),
                        url: '/dashboard/study/plant-lexicon/poison-plants',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.plant-families'),
                        url: '/dashboard/study/plant-lexicon/plant-families',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.catalogue'),
                        url: '/dashboard/study/plant-lexicon/catalogue',
                    },
                ],
            },
            {
                title: $t('dashboard.navigation.nav-study.quiz.title'),
                url: '#',
                icon: NotebookPen,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.plants-practice'),
                        url: '/dashboard/study/quiz/plants-practice',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.plants-theory'),
                        url: '/dashboard/study/quiz/plants-theory',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.plants-poison'),
                        url: '/dashboard/study/quiz/plants-poison',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.catalogue'),
                        url: '/dashboard/study/quiz/catalogue',
                    },
                ],
            },
        ];
    });

    const data = {
        navCourse: [
            {
                title: $t('dashboard.navigation.nav-course.courses.title'),
                url: '/dashboard/courses',
                icon: GraduationCap,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-course.courses.items.overview'),
                        url: '/dashboard/courses',
                    },
                    {
                        title: $t('dashboard.navigation.nav-course.courses.items.documents'),
                        url: '/dashboard/courses/documents',
                    },
                ],
            },
            {
                title: $t('dashboard.navigation.nav-course.course-modules.title'),
                url: '/dashboard/courses/modules',
                icon: CalendarDays,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-course.course-modules.items.overview'),
                        url: '/dashboard/courses/modules',
                    },
                ],
            },
        ],
        navSecondary: [
            {
                title: $t('dashboard.navigation.nav-secondary.help'),
                url: '/dashboard/help',
                icon: LifeBuoy,
            },
            {
                title: $t('dashboard.navigation.nav-secondary.feedback'),
                url: '/dashboard/feedback',
                icon: Send,
            },
            {
                title: $t('dashboard.navigation.nav-secondary.changelog'),
                url: '/dashboard/changelog',
                icon: FileClock,
            },
        ],
    };
</script>
