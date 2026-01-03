<template>
    <div class="min-h-screen bg-background">
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header class="flex h-16 shrink-0 items-center gap-2">
                    <div class="flex items-center gap-2 px-4">
                        <SidebarTrigger class="-ml-1" />
                        <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem class="hidden md:block">
                                    <BreadcrumbLink href="#"> Building Your Application </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator class="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <slot />
                </div>
            </SidebarInset>
        </SidebarProvider>
    </div>
</template>

<script lang="ts" setup>
    definePageMeta({ middleware: ['auth'] });
    import { useDashboardGlobalStore } from '~~/layers/dashboard/stores/dashboardGlobalStore';

    const dashboardGlobalStore = useDashboardGlobalStore();
    // Load dashboard globals application-wide
    dashboardGlobalStore.loadDashboardGlobalData();

    useHead({
        htmlAttrs: {
            class: 'dashboard-root',
        },
    });
</script>

<style scoped>
    /* Reset any inherited public styles */
    .dashboard-root {
        font-size: 16px; /* Reset to standard base font-size */
    }

    .dashboard-root :deep(*) {
        /* Ensure shadcn/Tailwind styles take precedence */
        box-sizing: border-box;
    }
</style>
