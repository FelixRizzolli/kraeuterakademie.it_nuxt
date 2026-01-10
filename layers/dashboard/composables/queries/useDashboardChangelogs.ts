import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

import FIND_DASHBOARD_CHANGELOGS from '~/graphql/queries/dashboard/findDashboardChangelogs.gql';

const getDashboardChangelogsQuery = `
    ${FIND_DASHBOARD_CHANGELOGS?.loc?.source?.body}
`;

export const useDashboardChangelogs = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardChangelogs = async (): Promise<Array<DashboardChangelog> | null> => {
        try {
            const response = await gqlQuery<any>(getDashboardChangelogsQuery);

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard changelogs:', response.errors);
            }

            if (!response?.data?.DashboardChangelogs?.docs?.length) {
                console.warn('Dashboard changelogs not found');
                return null;
            }

            return response.data?.DashboardChangelogs?.docs || null;
        } catch (error) {
            console.error('Error fetching dashboard changelogs:', error);
            throw error;
        }
    };

    return fetchDashboardChangelogs;
};
