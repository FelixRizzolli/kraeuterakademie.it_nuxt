<template>
    <Header v-if="globalData?.header" :data="globalData?.header" />
    <main>
        <slot />
    </main>
    <Footer v-if="!loading && globalData?.footer" :data="globalData.footer" />
</template>

<script lang="ts" setup>
    const globalData = ref<any>(null);
    const loading = ref(true);
    const error = ref<string | null>(null);

    const loadGlobalData = async () => {
        loading.value = true;
        error.value = null;

        try {
            const findGlobal = useGlobal();
            globalData.value = await findGlobal();
            console.log('Global data loaded:', globalData.value);
            console.log('Footer data:', globalData.value?.footer);
            console.log('Loading state:', loading.value);
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error';
            console.error('Error loading global data:', err);
        } finally {
            loading.value = false;
            console.log('Loading finished, loading state:', loading.value);
            console.log('Will footer render?', !loading.value && !!globalData.value?.footer);
        }
    };

    // Load page data on component mount
    onMounted(() => {
        loadGlobalData();
    });
</script>

<style lang="scss" scoped></style>
