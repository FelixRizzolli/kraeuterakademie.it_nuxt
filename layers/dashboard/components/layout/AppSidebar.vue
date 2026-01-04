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
            <NavGroup :title="$t('dashboard.navigation.nav-course.title')" :items="navCourse" />
            <NavGroup :title="$t('dashboard.navigation.nav-study.title')" :items="navStudy" />
            <NavSecondary :items="navSecondary" class="mt-auto" />
        </SidebarContent>
        <SidebarFooter>
            <NavUser :user="userInfo" />
        </SidebarFooter>
    </Sidebar>
</template>

<script setup lang="ts">
    import type { SidebarProps } from '~~/layers/dashboard/components/ui/sidebar';

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
    import { useDashboardNavigation } from '~~/layers/dashboard/composables/useDashboardNavigation';

    const props = withDefaults(defineProps<SidebarProps>(), {
        variant: 'inset',
    });

    const { userId, user, email, firstName, lastName } = useAuth();
    const userData = useDashboardUserStore();

    // Ensure user data is loaded when sidebar mounts
    const { navCourse, navStudy, navSecondary, ensureLoaded } = useDashboardNavigation({ userStore: userData });

    onMounted(async () => {
        console.log('Sidebar mounted - User ID from auth:', userId.value);
        console.log('Store userId before setting:', userData.userId);

        if (userId.value) {
            const numericUserId = Number(userId.value);
            // Set userId in store first, then ensure data is loaded via the composable
            userData.setUserId(numericUserId);
            console.log('Store userId after setting:', userData.userId);

            try {
                await ensureLoaded();
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
</script>
