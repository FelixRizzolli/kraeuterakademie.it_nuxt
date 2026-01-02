import PUBLIC_IMAGE_FRAGMENT from '~/graphql/fragments/public/collections/publicImage.fragment.gql';
import PUBLIC_PARTNER_FRAGMENT from '~/graphql/fragments/public/collections/publicPartner.fragment.gql';
import PUBLIC_SOCIAL_FRAGMENT from '~/graphql/fragments/public/collections/publicSocial.fragment.gql';
import PUBLIC_TEXT_BLOCK_FRAGMENT from '~/graphql/fragments/public/collections/publicTextBlock.fragment.gql';

import PUBLIC_HEADER_FRAGMENT from '~/graphql/fragments/public/globals/publicHeader.fragment.gql';
import PUBLIC_FOOTER_FRAGMENT from '~/graphql/fragments/public/globals/publicFooter.fragment.gql';
import PUBLIC_SIDEBAR_FRAGMENT from '~/graphql/fragments/public/globals/publicSidebar.fragment.gql';
import CONTACT_FRAGMENT from '~/graphql/fragments/shared/globals/contact.fragment.gql';

import FIND_GLOBALS_QUERY from '~/graphql/queries/findGlobals.gql';

interface GlobalData {
    header: PublicHeader;
    footer: PublicFooter;
    sidebar: PublicSidebar;
    contact: Contact;
    textblocks: Array<PublicTextBlock>;
    partners: Array<PublicPartner>;
    socials: Array<PublicSocial>;
}

const findGlobalsQuery = `
    ${PUBLIC_IMAGE_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_PARTNER_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_SOCIAL_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_TEXT_BLOCK_FRAGMENT?.loc?.source?.body}

    ${PUBLIC_HEADER_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_FOOTER_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_SIDEBAR_FRAGMENT?.loc?.source?.body}
    ${CONTACT_FRAGMENT?.loc?.source?.body}

    ${FIND_GLOBALS_QUERY?.loc?.source?.body}
`;

export const useGlobal = () => {
    const gqlQuery = usePayloadGraphQL();

    /**
     * Fetch global data from PayloadCMS.
     * This includes header, sidebar, footer, contact, partners, socials, and textblocks.
     * @return {Promise<GlobalData | null>} The global data or null if not found.
     * @throws {Error} If there is an error during the fetch operation.
     **/
    const fetchGlobal = async (): Promise<GlobalData | null> => {
        try {
            // Fetch globals (Header, Footer, Sidebar, Contact)
            const response = await gqlQuery<any>(findGlobalsQuery);

            const header = response?.data?.PublicHeader;
            const footer = response?.data?.PublicFooter;
            const sidebar = response?.data?.PublicSidebar;
            const contact = response?.data?.Contact;
            const partners = response?.data?.PublicPartners?.docs || [];
            const socials = response?.data?.PublicSocials?.docs || [];
            const textblocks = response?.data?.PublicTextBlocks?.docs || [];

            if (!header || !footer || !sidebar || !contact || !partners || !socials || !textblocks) {
                console.warn('Global data not found');
                return null;
            }

            return {
                header,
                footer,
                sidebar,
                contact,
                textblocks,
                partners,
                socials,
            };
        } catch (error) {
            console.error('Error fetching global data:', error);
            throw error; // Re-throw error for further handling
        }
    };

    return fetchGlobal;
};
