<template>
    <Header v-if="globalStore.data?.header" :data="globalStore.data.header" />
    <main>
        <slot />
    </main>
    <Footer v-if="!globalStore.loading && globalStore.data?.footer" :data="globalStore.data.footer" />
</template>

<script lang="ts" setup>
    import { useGlobalStore } from '~/stores/globalStore';

    const globalStore = useGlobalStore();
</script>

<style lang="scss" scoped></style>
