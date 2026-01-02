import DASHBOARD_GLOBALS_FRAGMENT from '~/graphql/fragments/dashboard/globals/dashboardGlobals.fragment.gql';
import DASHBOARD_IMAGE_FRAGMENT from '~/graphql/fragments/dashboard/collections/dashboardImage.fragment.gql';
import DASHBOARD_TEXT_BLOCK_FRAGMENT from '~/graphql/fragments/dashboard/collections/dashboardTextBlock.fragment.gql';

import FIND_DASHBOARD_GLOBAL_QUERY from '~/graphql/queries/findDashboardGlobal.gql';

interface DashboardData {
    globals: DashboardGlobal;
    textblocks: Array<DashboardTextBlock>;
}

const findDashboardQuery = `
    ${DASHBOARD_IMAGE_FRAGMENT?.loc?.source?.body}
    ${DASHBOARD_GLOBALS_FRAGMENT?.loc?.source?.body}
    ${DASHBOARD_TEXT_BLOCK_FRAGMENT?.loc?.source?.body}

    ${FIND_DASHBOARD_GLOBAL_QUERY?.loc?.source?.body}
`;

export const useDashboardGlobal = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardGlobal = async (): Promise<DashboardData | null> => {
        try {
            const response = await gqlQuery<any>(findDashboardQuery);

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard globals:', response.errors);
            }

            const globals = response?.data?.DashboardGlobal;
            const textblocks = response?.data?.DashboardTextBlocks?.docs || [];

            if (!globals) {
                console.warn('Dashboard global data not found', { response: response?.data });
                return null;
            }

            return {
                globals,
                textblocks,
            };
        } catch (error) {
            console.error('Error fetching dashboard global data:', error);
            throw error;
        }
    };

    return fetchDashboardGlobal;
};
