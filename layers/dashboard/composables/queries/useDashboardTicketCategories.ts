import GET_DASHBOARD_TICKET_CATEGORIES from '~/graphql/queries/dashboard/getDashboardTicketCategories.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const getDashboardTicketCategoriesQuery = `
    ${GET_DASHBOARD_TICKET_CATEGORIES?.loc?.source?.body}
`;

export const useDashboardTicketCategories = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchDashboardTicketCategories = async (): Promise<Array<DashboardTicketCategory> | null> => {
        try {
            const response = await gqlQuery<any>(getDashboardTicketCategoriesQuery);

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching dashboard ticket categories:', response.errors);
            }

            if (!response?.data?.DashboardTicketCategories?.docs?.length) {
                console.warn('Dashboard ticket categories not found');
                return null;
            }

            return response.data?.DashboardTicketCategories?.docs || null;
        } catch (error) {
            console.error('Error fetching dashboard ticket categories:', error);
            throw error;
        }
    };

    return fetchDashboardTicketCategories;
};
