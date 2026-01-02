import { defineStore } from 'pinia';
import { useDashboardGlobal } from '~~/layers/dashboard/composables/useDashboardGlobal';

interface DashboardData {
    globals: DashboardGlobals;
    textblocks: Array<DashboardTextBlock>;
}

export const useDashboardGlobalStore = defineStore('dashboard-global', () => {
    const data = ref<DashboardData | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadDashboardGlobalData = async () => {
        if (data.value || loading.value) return;

        loading.value = true;
        error.value = null;

        try {
            const findDashboardGlobal = useDashboardGlobal();
            data.value = await findDashboardGlobal();
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error';
            console.debug('Error loading dashboard global data:', err);
        } finally {
            loading.value = false;
        }
    };

    const clearData = () => {
        data.value = null;
        error.value = null;
    };

    return {
        data,
        loading,
        error,
        loadDashboardGlobalData,
        clearData,
    };
});
