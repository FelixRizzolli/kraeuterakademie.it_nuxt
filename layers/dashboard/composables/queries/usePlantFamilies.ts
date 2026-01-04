import FIND_PLANT_FAMILIES from '~/graphql/queries/dashboard/findPlantFamilies.gql';
import { usePayloadGraphQL } from '~~/layers/shared/composables/usePayloadGraphQL';

const findPlantFamilies = `
    ${FIND_PLANT_FAMILIES?.loc?.source?.body}
`;

export interface PlantFamilySmall {
    id: string;
    germanName: string;
    scientificName: string;
}

export const usePlantFamilies = () => {
    const gqlQuery = usePayloadGraphQL();

    const fetchPlantFamilies = async (): Promise<Array<PlantFamilySmall | null>> => {
        try {
            const response = await gqlQuery<any>(findPlantFamilies, {
                pagination: false,
                limit: null,
            });

            if (response?.errors && response.errors.length) {
                console.error('GraphQL errors when fetching plant families:', response.errors);
            }

            if (!response?.data?.PlantFamilies?.docs?.length) {
                console.warn('Plant families not found');
                return [];
            }

            return response.data?.PlantFamilies?.docs || [];
        } catch (error) {
            console.error('Error fetching plant families data:', error);
            throw error;
        }
    };

    return fetchPlantFamilies;
};
