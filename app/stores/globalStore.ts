import { defineStore } from 'pinia';

interface GlobalData {
    header: Header;
    sidebar: Sidebar;
    footer: Footer;
    contact: Contact;
    textblocks: Array<WebTextBlock>;
    partners: Array<WebPartner>;
    socials: Array<WebSocial>;
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
        data,
        loading,
        error,
        loadGlobalData,
        clearData,
    };
});
