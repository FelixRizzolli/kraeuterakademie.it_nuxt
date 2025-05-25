import findPages from '~/graphql/queries/findPages.gql';

export const usePage = () => {
    const gqlQuery = useStrapiGraphQL();

    const fetchPage = async (url: string) => {
        const response: any = await gqlQuery(findPages, {
            filters: {
                url: {
                    eq: url,
                },
            },
        });

        const pageData: { seo: any; contentComponents: Array<any> } = {
            seo: response?.data?.pages?.[0]?.seo || {},
            contentComponents: [],
        };

        response?.data?.pages?.[0]?.components?.forEach((component: any) => {
            const componentName = component.__typename.replace('ComponentContent', '');
            pageData.contentComponents.push({
                name: componentName,
                data: component.data,
                settings: component.settings,
            });
        });

        return pageData;
    };

    return fetchPage;
};
