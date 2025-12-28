import WEB_IMAGE_FRAGMENT from '~/graphql/fragments/web/collections/WebImages.fragment.gql';
import WEB_PARTNER_FRAGMENT from '~/graphql/fragments/web/collections/webPartner.fragment.gql';
import WEB_SOCIAL_FRAGMENT from '~/graphql/fragments/web/collections/webSocial.fragment.gql';
import TEXTBLOCK_FRAGMENT from '~/graphql/fragments/web/collections/textblock.fragment.gql';

import HEADER_FRAGMENT from '~/graphql/fragments/globals/header.fragment.gql';
import FOOTER_FRAGMENT from '~/graphql/fragments/globals/footer.fragment.gql';
import SIDEBAR_FRAGMENT from '~/graphql/fragments/globals/sidebar.fragment.gql';
import CONTACT_FRAGMENT from '~/graphql/fragments/globals/contact.fragment.gql';

import FIND_GLOBALS_QUERY from '~/graphql/queries/findGlobals.gql';

interface GlobalData {
    header: Header;
    footer: Footer;
    sidebar: Sidebar;
    contact: Contact;
    textblocks: Array<WebTextBlock>;
    partners: Array<WebPartner>;
    socials: Array<WebSocial>;
}

const findGlobalsQuery = `
    ${WEB_IMAGE_FRAGMENT?.loc?.source?.body}
    ${WEB_PARTNER_FRAGMENT?.loc?.source?.body}
    ${WEB_SOCIAL_FRAGMENT?.loc?.source?.body}
    ${TEXTBLOCK_FRAGMENT?.loc?.source?.body}

    ${HEADER_FRAGMENT?.loc?.source?.body}
    ${FOOTER_FRAGMENT?.loc?.source?.body}
    ${SIDEBAR_FRAGMENT?.loc?.source?.body}
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

            const header = response?.data?.Header;
            const footer = response?.data?.Footer;
            const sidebar = response?.data?.Sidebar;
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
