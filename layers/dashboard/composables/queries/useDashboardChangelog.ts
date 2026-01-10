import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

import DASHBOARD_IMAGE_FRAGMENT from '~/graphql/fragments/dashboard/collections/dashboardImage.fragment.gql';

import DASHBOARD_IMAGE_ELEMENT_FRAGMENT from '~/graphql/fragments/dashboard/blocks/dashboardImageElement.fragment.gql';
import DASHBOARD_IMAGE_TEXT_FRAGMENT from '~/graphql/fragments/dashboard/blocks/dashboardImageText.fragment.gql';
import DASHBOARD_TITLE_ELEMENT_FRAGMENT from '~/graphql/fragments/dashboard/blocks/dashboardTitleElement.fragment.gql';
import DASHBOARD_TEXT_ELEMENT_FRAGMENT from '~/graphql/fragments/dashboard/blocks/dashboardTextElement.fragment.gql';

import FIND_DASHBOARD_CHANGELOG_QUERY from '~/graphql/queries/dashboard/findDashboardChangelog.gql';

interface ContentComponent {
    name: string;
    data: any;
    settings?: any;
}

interface DashboardPageData {
    meta: {
        title?: string;
        publishedTime?: string;
        modifiedTime?: string;
    };
    contentComponents: ContentComponent[];
}

const findDashboardChangelogQuery = `
    ${DASHBOARD_IMAGE_FRAGMENT?.loc?.source?.body}

    ${DASHBOARD_IMAGE_ELEMENT_FRAGMENT?.loc?.source?.body}
    ${DASHBOARD_IMAGE_TEXT_FRAGMENT?.loc?.source?.body}
    ${DASHBOARD_TITLE_ELEMENT_FRAGMENT?.loc?.source?.body}
    ${DASHBOARD_TEXT_ELEMENT_FRAGMENT?.loc?.source?.body}

    ${FIND_DASHBOARD_CHANGELOG_QUERY?.loc?.source?.body}
`;

export const useDashboardChangelog = () => {
    const gqlQuery = usePayloadGraphQL();

    /**
     * Transforms PayloadCMS block data to application format
     * @param blocks - Raw blocks from PayloadCMS API response
     * @returns Transformed content components
     */
    const transformBlocks = (blocks: any[] = []): ContentComponent[] => {
        return blocks
            .filter((block) => block?.__typename) // Filter out invalid blocks
            .map((block: any) => {
                // Extract component name by removing 'Dashboard' prefix from PayloadCMS block types
                // e.g., 'DashboardImageText' -> 'ImageText'
                const componentName = block?.__typename?.startsWith('Dashboard')
                    ? block.__typename.replace('Dashboard', '')
                    : block.__typename || 'unknown';

                // PayloadCMS blocks structure: { dashboardImageTextContent, dashboardImageTextSettings, etc. }
                // Find the content and settings fields dynamically
                const blockPrefix = block.__typename.charAt(0).toLowerCase() + block.__typename.slice(1);
                const contentKey = `${blockPrefix}Content`;
                const settingsKey = `${blockPrefix}Settings`;

                return {
                    name: componentName,
                    data: block[contentKey] || block.content || {},
                    settings: block[settingsKey] || block.settings || {},
                };
            });
    };

    /**
     * Fetches page data by version
     * @param version - The page version to fetch
     * @returns Promise with the page data or null if not found
     */
    const fetchDashboardChangelog = async (version: string): Promise<DashboardPageData | null> => {
        try {
            if (!version) {
                throw new Error('version parameter is required');
            }

            const response = await gqlQuery<any>(findDashboardChangelogQuery, {
                where: {
                    version: { equals: version },
                },
            });

            const page = response?.data?.DashboardChangelogs?.docs?.[0];
            if (!page) {
                console.warn(`Page with version "${version}" not found`);
                console.log('Available pages:', response?.data?.DashboardChangelogs?.docs);
                return null;
            }

            return {
                meta: {
                    title: page.version || '',
                    publishedTime: page.createdAt || '',
                    modifiedTime: page.updatedAt || '',
                },
                contentComponents: transformBlocks(page.blocks || []),
            };
        } catch (error) {
            console.error('Error fetching page data:', error);
            if (error instanceof Error) {
                console.error('Error details:', {
                    message: error.message,
                    stack: error.stack,
                });
            }
            throw error; // Re-throw error for further handling
        }
    };

    return fetchDashboardChangelog;
};
