import { defineStore } from 'pinia';
import type { Contact, Footer, Header } from '~~/shared/types/graphql';

interface GlobalData {
    header?: Header;
    footer?: Footer;
    contact?: Contact;
    textblocks?: Array<TextBlock>;
    partners?: Array<Partner>;
    socials?: Array<Social>;
}

export const useGlobalStore = defineStore('global', () => {
    const data = ref<GlobalData | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const loadGlobalData = async () => {
        // Don't reload if we already have data or are currently loading
        if (data.value || loading.value) return;

        loading.value = true;
        error.value = null;

        try {
            const findGlobal = useGlobal();
            data.value = await findGlobal();
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error';
            console.debug('Error loading global data:', err);
        } finally {
            loading.value = false;
        }
    };

    const clearData = () => {
        data.value = null;
        error.value = null;
    };

    return {
        data: readonly(data),
        loading: readonly(loading),
        error: readonly(error),
        loadGlobalData,
        clearData,
    };
});
