<template>
    <ContentComponentRenderer :name="cc.name" :data="cc.data" v-for="(cc, index) in contentComponents" />
</template>

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { CONTENT_PAGE_QUERY } from '~/graphql/queries/contentPageQuery';

    const contentComponents = ref<any[]>([]);

    const graphql = useStrapiGraphQL();

    onMounted(async () => {
        const response: any = await graphql(CONTENT_PAGE_QUERY, {
            filters: {
                url: {
                    eq: 'index',
                },
            },
        });
        console.log('response', response);

        response?.data?.pages?.[0]?.components?.forEach((component: any) => {
            const componentName = component.__typename.replace('ComponentContent', '');
            contentComponents.value.push({
                name: componentName,
                data: component.data,
                settings: component.settings,
            });
        });

        console.log('contentComponents', contentComponents.value);
    });
</script>

<style lang="scss" scoped></style>
