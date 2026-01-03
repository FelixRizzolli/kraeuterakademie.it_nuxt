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

    import NavGroup from '~~/layers/dashboard/components/NavGroup.vue';
    import NavSecondary from '~~/layers/dashboard/components/NavSecondary.vue';
    import NavUser from '~~/layers/dashboard/components/NavUser.vue';
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

    const props = withDefaults(defineProps<SidebarProps>(), {
        variant: 'inset',
    });

    const { userId, user, email, firstName, lastName } = useAuth();

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

    // Fetch course video lessons for current user and map to nav items
    const config = useRuntimeConfig();

    const { data: lessonsData } = await useAsyncData(
        'my-course-video-lessons',
        async () => {
            if (!userId.value) return { Courses: { docs: [] } };

            const query = `query findMyCourseVideoLessons($where: Course_where) {\n  Courses(where: $where) {\n    docs {\n      videoLessons {\n        id\n        title\n      }\n    }\n  }\n}`;

            // Adjust `where` shape to your schema. Here we assume courses have a participants relation
            const variables = {
                where: {
                    participants: {
                        equals: userId.value,
                    },
                },
            };

            const res = await $fetch(`${config.public.payloadApiUrl}/api/graphql`, {
                method: 'POST',
                body: { query, variables },
            });

            return res;
        },
        { watch: [userId] },
    );

    const videoLessons = computed(() => {
        const docs = lessonsData.value?.data?.Courses?.docs ?? lessonsData.value?.Courses?.docs ?? [];
        return docs.flatMap((d: any) => d.videoLessons ?? []);
    });

    const navStudy = computed(() => {
        const videoItems = videoLessons.value.map((v: any) => ({ title: v.title, url: `/dashboard/video-lessons/${v.id}` }));

        return [
            {
                title: $t('dashboard.navigation.nav-study.video-lessons'),
                url: '#',
                icon: Video,
                isActive: true,
                items: videoItems,
            },
            {
                title: $t('dashboard.navigation.nav-study.plant-lexicon.title'),
                url: '#',
                icon: BookOpenText,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.plants'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.poison-plants'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.plant-families'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.plant-groups'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.plant-lexicon.items.catalogue'),
                        url: '#',
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
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.plants-theory'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.plants-poison'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-study.quiz.items.catalogue'),
                        url: '#',
                    },
                ],
            },
        ];
    });

    const data = {
        navCourse: [
            {
                title: $t('dashboard.navigation.nav-course.courses.title'),
                url: '#',
                icon: GraduationCap,
                isActive: true,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-course.courses.items.overview'),
                        url: '#',
                    },
                    {
                        title: $t('dashboard.navigation.nav-course.courses.items.documents'),
                        url: '#',
                    },
                ],
            },
            {
                title: $t('dashboard.navigation.nav-course.course-modules.title'),
                url: '#',
                icon: CalendarDays,
                items: [
                    {
                        title: $t('dashboard.navigation.nav-course.course-modules.items.overview'),
                        url: '#',
                    },
                ],
            },
        ],
        navSecondary: [
            {
                title: $t('dashboard.navigation.nav-secondary.support'),
                url: '#',
                icon: LifeBuoy,
            },
            {
                title: $t('dashboard.navigation.nav-secondary.feedback'),
                url: '#',
                icon: Send,
            },
            {
                title: $t('dashboard.navigation.nav-secondary.changelog'),
                url: '#',
                icon: FileClock,
            },
        ],
    };
</script>
