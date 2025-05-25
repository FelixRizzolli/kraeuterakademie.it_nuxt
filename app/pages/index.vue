<template>
    <ContentComponentRenderer :name="cc.name" :data="cc.data" v-for="(cc, index) in contentComponents" />
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';

    const contentComponents = ref<any[]>([]);

    const graphql = useStrapiGraphQL();

    onMounted(async () => {
        const findPage = usePage();
        const pageData = await findPage('index');

        console.log('pageData', pageData);

        contentComponents.value = pageData?.contentComponents || [];

        console.log('contentComponents', contentComponents.value);
    });
</script>

<style lang="scss" scoped></style>
