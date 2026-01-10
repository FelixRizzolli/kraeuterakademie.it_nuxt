import FIND_DASHBOARD_HELP_PAGES from '~/graphql/queries/dashboard/findDashboardHelpPages.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const getDashboardHelpPagesQuery = `
    ${FIND_DASHBOARD_HELP_PAGES?.loc?.source?.body}
`;

export const useDashboardHelpPages = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardHelpPages = async (): Promise<Array<DashboardHelpPage> | null> => {
        try {
            const response = await gqlQuery<any>(getDashboardHelpPagesQuery);

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard help pages:', response.errors);
            }

            if (!response?.data?.DashboardHelpPages?.docs?.length) {
                console.warn('Dashboard help pages not found');
                return null;
            }

            return response.data?.DashboardHelpPages?.docs || null;
        } catch (error) {
            console.error('Error fetching dashboard help pages:', error);
            throw error;
        }
    };

    return fetchDashboardHelpPages;
};
