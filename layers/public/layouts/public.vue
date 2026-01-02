<template>
    <ClientOnly>
        <Header v-if="globalStore.data?.header" :header="globalStore.data.header" :sidebar="globalStore.data.sidebar" />
    </ClientOnly>
    <main>
        <slot />
    </main>
    <ClientOnly>
        <Footer
            v-if="!globalStore.loading && globalStore.data?.footer"
            :footer="globalStore.data.footer"
            :contact="globalStore.data.contact"
            :socials="globalStore.data.socials"
            :partners="globalStore.data.partners"
        />
    </ClientOnly>
</template>

<script lang="ts" setup>
    import { useGlobalStore } from '~~/layers/public/stores/globalStore';

    const globalStore = useGlobalStore();

    useHead({
        htmlAttrs: {
            class: 'public-root',
        },
    });
</script>

<style lang="scss" src="../assets/styles/public/index.scss"></style>
