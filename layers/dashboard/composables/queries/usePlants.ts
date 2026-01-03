import FIND_PLANTS from '~/graphql/queries/dashboard/findPlants.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const findPlants = `
    ${FIND_PLANTS?.loc?.source?.body}
`;

export interface PlantSmall {
    germanName: string;
    scientificName: string;
    family: {
        germanName: string;
        scientificName: string;
    };
    toxicityLevel: string;
}

export const usePlants = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchPlants = async (): Promise<Array<PlantSmall | null>> => {
        try {
            const response = await gqlQuery<any>(findPlants, {
                pagination: false,
                limit: null,
            });

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching plants:', response.errors);
            }

            if (!response?.data?.Plants?.docs?.length) {
                console.warn('Plants not found');
                return null;
            }

            return (
                response.data?.Plants?.docs?.map((plant: any) => ({
                    germanName: plant.germanName,
                    scientificName: plant.scientificName,
                    family: {
                        germanName: plant.family.germanName,
                        scientificName: plant.family.scientificName,
                    },
                    toxicityLevel: plant.toxicityLevel?.title || '',
                })) || null
            );
        } catch (error) {
            console.error('Error fetching plants data:', error);
            throw error;
        }
    };

    return fetchPlants;
};
