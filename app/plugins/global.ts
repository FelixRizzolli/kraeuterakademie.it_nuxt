import { useGlobalStore } from '~/stores/globalStore';

export default defineNuxtPlugin(async () => {
    const globalStore = useGlobalStore();
    await globalStore.loadGlobalData();
});
