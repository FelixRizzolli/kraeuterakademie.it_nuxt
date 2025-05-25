import findPages from '~/graphql/queries/findPages.gql';

interface ContentComponent {
    name: string;
    data: any;
    settings?: any;
}

interface PageData {
    seo: any;
    contentComponents: ContentComponent[];
}

export const usePage = () => {
    const gqlQuery = useStrapiGraphQL();
    const { $logger } = useNuxtApp();

    /**
     * Transforms component data from API format to application format
     * @param components - Raw components from API response
     * @returns Transformed content components
     */
    const transformComponents = (components: any[] = []): any[] => {
        return components
            .filter((component) => component.__typename && !component.code) // Filter out error components
            .map((component) => {
                // Extract component name by removing the prefix, handling different formats
                const componentName = component.__typename.startsWith('ComponentContent')
                    ? component.__typename.replace('ComponentContent', '')
                    : component.__typename;

                return {
                    name: componentName,
                    data: component.data || {},
                    settings: component.settings || {},
                };
            });
    };

    /**
     * Fetches page data by URL
     * @param url - The page URL to fetch
     * @returns Promise with the page data or null if not found
     */
    const fetchPage = async (url: string): Promise<PageData | null> => {
        try {
            if (!url) {
                throw new Error('URL parameter is required');
            }

            const response = await gqlQuery<any>(findPages, {
                filters: {
                    url: { eq: url },
                },
            });

            const page = response?.data?.pages?.[0];

            if (!page) {
                console.warn(`Page with URL "${url}" not found`);
                return null;
            }

            return {
                seo: page.seo || {},
                contentComponents: transformComponents(page.components),
            };
        } catch (error) {
            console.error('Error fetching page data:', error);
            throw error; // Re-throw error for further handling
        }
    };

    return fetchPage;
};
