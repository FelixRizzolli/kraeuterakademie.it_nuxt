import type { DocumentNode } from 'graphql';

interface PayloadGraphQLVariables {
    [key: string]: any;
}

/**
 * Composable for making GraphQL queries to PayloadCMS API
 * @returns Function to execute GraphQL queries
 */
export const usePayloadGraphQL = () => {
    const runtimeConfig = useRuntimeConfig();
    const payloadApiUrl = runtimeConfig.public.payloadApiUrl;

    /**
     * Executes a GraphQL query against PayloadCMS API
     * @param query - GraphQL query string or DocumentNode
     * @param variables - Query variables
     * @returns Promise with the query result
     */
    const query = async <T>(queryString: string | DocumentNode, variables?: PayloadGraphQLVariables): Promise<T> => {
        try {
            // Convert DocumentNode to string if needed
            const queryBody = typeof queryString === 'string' ? queryString : queryString.loc?.source?.body || '';

            const tokenCookie = useCookie('payload-token');
            const token = tokenCookie?.value ?? null;

            console.log('🔑 Using token:', token ? 'Yes' : 'No');
            if (!token) {
                console.warn('⚠️ No payload-token cookie found in usePayloadGraphQL');
            }

            const headers: Record<string, string> = {
                'Content-Type': 'application/json',
            };
            if (token) headers.Authorization = `JWT ${token}`;

            const response = await $fetch<T>(`${payloadApiUrl}/api/graphql`, {
                method: 'POST',
                credentials: 'include',
                headers,
                body: {
                    query: queryBody,
                    variables: variables || {},
                },
            });

            return response as T;
        } catch (error) {
            console.error('PayloadCMS GraphQL Error:', error);
            if (error instanceof Error) {
                console.error('Error message:', error.message);
                console.error('Error stack:', error.stack);
            }
            throw error;
        }
    };

    return query;
};
