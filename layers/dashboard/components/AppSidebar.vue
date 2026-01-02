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
            <NavMain :items="data.navCourse" />
            <NavMain :items="data.navStudy" />
            <NavSecondary :items="data.navSecondary" class="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="data.user" />
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

    import NavMain from '~~/layers/dashboard/components/NavMain.vue';
    import NavSecondary from '~~/layers/dashboard/components/NavSecondary.vue';
    import NavUser from '~~/layers/dashboard/components/NavUser.vue';
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

    const data = {
        user: {
            name: 'Sigrid Thaler Rizzolli',
            email: 'sigrid.thaler@gmail.com',
            avatar: '/avatars/shadcn.jpg',
        },
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
        navStudy: [
            {
                title: $t('dashboard.navigation.nav-study.video-lessons'),
                url: '#',
                icon: Video,
                isActive: true,
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
