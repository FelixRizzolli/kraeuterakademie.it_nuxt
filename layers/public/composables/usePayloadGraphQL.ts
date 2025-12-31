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

            const response = await $fetch<T>(`${payloadApiUrl}/api/graphql`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
