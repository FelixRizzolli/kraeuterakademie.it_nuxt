import { useDashboardGlobalStore } from '~~/layers/dashboard/stores/dashboardGlobalStore';

export default defineNuxtPlugin(async (nuxtApp) => {
    // Only load dashboard globals on dashboard pages to avoid fetching
    // dashboard data for public routes.
    try {
        const route = useRoute?.();
        const path = route?.path ?? route?.fullPath ?? (nuxtApp?.ssrContext?.url as string) ?? '';

        if (!path.startsWith('/dashboard')) return;

        const dashboardGlobalStore = useDashboardGlobalStore();
        await dashboardGlobalStore.loadDashboardGlobalData();
    } catch (err) {
        // In case route isn't available for some lifecycle timing, skip silently
        // — fetching dashboard globals is not critical for non-dashboard pages.
        // eslint-disable-next-line no-console
        console.debug('Skipping dashboard globals plugin:', err);
    }
});
