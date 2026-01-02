import { useDashboardGlobalStore } from '~~/layers/dashboard/stores/dashboardGlobalStore';

export default defineNuxtPlugin(async () => {
    const dashboardGlobalStore = useDashboardGlobalStore();
    // Ensure dashboard globals are loaded during app initialization (matching public plugin)
    await dashboardGlobalStore.loadDashboardGlobalData();
});
