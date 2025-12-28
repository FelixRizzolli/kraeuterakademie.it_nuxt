import WEB_IMAGE_FRAGMENT from '~/graphql/fragments/web/collections/webImage.fragment.gql';
import WEB_PARTNER_FRAGMENT from '~/graphql/fragments/web/collections/webPartner.fragment.gql';
import WEB_SOCIAL_FRAGMENT from '~/graphql/fragments/web/collections/webSocial.fragment.gql';
import WEB_TEXT_BLOCK_FRAGMENT from '~/graphql/fragments/web/collections/webTextBlock.fragment.gql';

import WEB_HEADER_FRAGMENT from '~/graphql/fragments/web/globals/webHeader.fragment.gql';
import WEB_FOOTER_FRAGMENT from '~/graphql/fragments/web/globals/webFooter.fragment.gql';
import WEB_SIDEBAR_FRAGMENT from '~/graphql/fragments/web/globals/webSidebar.fragment.gql';
import CONTACT_FRAGMENT from '~/graphql/fragments/shared/globals/contact.fragment.gql';

import FIND_GLOBALS_QUERY from '~/graphql/queries/findGlobals.gql';

interface GlobalData {
    header: WebHeader;
    footer: WebFooter;
    sidebar: WebSidebar;
    contact: Contact;
    textblocks: Array<WebTextBlock>;
    partners: Array<WebPartner>;
    socials: Array<WebSocial>;
}

const findGlobalsQuery = `
    ${WEB_IMAGE_FRAGMENT?.loc?.source?.body}
    ${WEB_PARTNER_FRAGMENT?.loc?.source?.body}
    ${WEB_SOCIAL_FRAGMENT?.loc?.source?.body}
    ${WEB_TEXT_BLOCK_FRAGMENT?.loc?.source?.body}

    ${WEB_HEADER_FRAGMENT?.loc?.source?.body}
    ${WEB_FOOTER_FRAGMENT?.loc?.source?.body}
    ${WEB_SIDEBAR_FRAGMENT?.loc?.source?.body}
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

            const header = response?.data?.WebHeader;
            const footer = response?.data?.WebFooter;
            const sidebar = response?.data?.WebSidebar;
            const contact = response?.data?.Contact;
            const partners = response?.data?.WebPartners?.docs || [];
            const socials = response?.data?.WebSocials?.docs || [];
            const textblocks = response?.data?.WebTextBlocks?.docs || [];

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
