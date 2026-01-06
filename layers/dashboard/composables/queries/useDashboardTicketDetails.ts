import GET_DASHBOARD_TICKET_DETAILS from '~/graphql/queries/dashboard/getDashboardTicketDetails.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const getDashboardTicketDetails = `
    ${GET_DASHBOARD_TICKET_DETAILS?.loc?.source?.body}
`;

export const useDashboardTicketDetails = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardTicketDetails = async (ticketId: string): Promise<Array<DashboardTicket> | null> => {
        try {
            const response = await gqlQuery<any>(getDashboardTicketDetails, {
                dashboardTicketId: ticketId,
            });

            console.log(response);

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard ticket details:', response.errors);
            }

            if (!response?.data?.DashboardTicket) {
                console.warn('Dashboard ticket details not found');
                return null;
            }

            return response.data?.DashboardTicket || null;
        } catch (error) {
            console.error('Error fetching dashboard ticket details:', error);
            throw error;
        }
    };

    return fetchDashboardTicketDetails;
};
