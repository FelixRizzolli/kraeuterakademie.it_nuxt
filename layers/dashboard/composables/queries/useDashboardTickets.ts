import FIND_DASHBOARD_TICKETS from '~/graphql/queries/dashboard/findDashboardTickets.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const getDashboardTicketsQuery = `
    ${FIND_DASHBOARD_TICKETS?.loc?.source?.body}
`;

export const useDashboardTickets = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardTickets = async (): Promise<Array<DashboardTicket> | null> => {
        try {
            const response = await gqlQuery<any>(getDashboardTicketsQuery);
            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard tickets:', response.errors);
            }

            if (!response?.data?.DashboardTickets?.docs?.length) {
                console.warn('Dashboard tickets not found');
                return null;
            }

            return response.data?.DashboardTickets?.docs || null;
        } catch (error) {
            console.error('Error fetching dashboard tickets:', error);
            throw error;
        }
    };

    return fetchDashboardTickets;
};
