import { useGlobalStore } from '~~/layers/public/stores/globalStore';

export default defineNuxtPlugin(async () => {
    const globalStore = useGlobalStore();
    await globalStore.loadGlobalData();
});
