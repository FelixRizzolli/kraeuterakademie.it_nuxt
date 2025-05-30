import STRAPI_UPLOAD_FILE_FRAGMENT from '~/graphql/fragments/strapi/uploadFile.fragment.gql';

import ELEMENTS_ADDRESS_FRAGMENT from '~/graphql/fragments/elements/address.fragment.gql';
import ELEMENTS_CONTACT_FRAGMENT from '~/graphql/fragments/elements/contact.fragment.gql';
import ELEMENTS_LINK_FRAGMENT from '~/graphql/fragments/elements/link.fragment.gql';
import ELEMENTS_PARTNER_FRAGMENT from '~/graphql/fragments/elements/partner.fragment.gql';
import ELEMENTS_SOCIAL_FRAGMENT from '~/graphql/fragments/elements/social.fragment.gql';

import SHARED_FOOTER_FRAGMENT from '~/graphql/fragments/shared/footer.fragment.gql';
import SHARED_HEADER_FRAGMENT from '~/graphql/fragments/shared/header.fragment.gql';
import SHARED_SIDEBAR_FRAGMENT from '~/graphql/fragments/shared/sidebar.fragment.gql';
import SHARED_TEXT_BLOCK_FRAGMENT from '~/graphql/fragments/shared/textBlock.fragment.gql';

import FIND_GLOBAL_QUERY from '~/graphql/queries/findGlobal.gql';

interface GlobalData {
    header: any;
    footer: any;
    textblocks: Array<any>;
}

const findGlobalQuery = `
    ${STRAPI_UPLOAD_FILE_FRAGMENT.loc.source.body}

    ${ELEMENTS_ADDRESS_FRAGMENT.loc.source.body}
    ${ELEMENTS_CONTACT_FRAGMENT.loc.source.body}
    ${ELEMENTS_LINK_FRAGMENT.loc.source.body}
    ${ELEMENTS_PARTNER_FRAGMENT.loc.source.body}
    ${ELEMENTS_SOCIAL_FRAGMENT.loc.source.body}

    ${SHARED_FOOTER_FRAGMENT.loc.source.body}
    ${SHARED_HEADER_FRAGMENT.loc.source.body}
    ${SHARED_SIDEBAR_FRAGMENT.loc.source.body}
    ${SHARED_TEXT_BLOCK_FRAGMENT.loc.source.body}

    ${FIND_GLOBAL_QUERY.loc.source.body}
`;

export const useGlobal = () => {
    const gqlQuery = useStrapiGraphQL();

    /**
     * Fetch global data from Strapi.
     * This includes header, sidebar, and footer information.
     * @return {Promise<GlobalData | null>} The global data or null if not found.
     * @throws {Error} If there is an error during the fetch operation.
     **/
    const fetchGlobal = async (): Promise<GlobalData | null> => {
        try {
            const response = await gqlQuery<any>(findGlobalQuery);

            const globalData = response?.data?.global;

            if (!globalData) {
                console.warn('Global data not found');
                return null;
            }

            return globalData;
        } catch (error) {
            console.error('Error fetching global data:', error);
            throw error; // Re-throw error for further handling
        }
    };

    return fetchGlobal;
};
