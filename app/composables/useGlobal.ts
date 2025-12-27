import MEDIA_FRAGMENT from '~/graphql/fragments/web/collections/media.fragment.gql';
import PARTNERS_FRAGMENT from '~/graphql/fragments/web/collections/partners.fragment.gql';
import SOCIALS_FRAGMENT from '~/graphql/fragments/web/collections/socials.fragment.gql';
import TEXTBLOCKS_FRAGMENT from '~/graphql/fragments/web/collections/textblocks.fragment.gql';

import HEADER_FRAGMENT from '~/graphql/fragments/globals/header.fragment.gql';
import FOOTER_FRAGMENT from '~/graphql/fragments/globals/footer.fragment.gql';
import SIDEBAR_FRAGMENT from '~/graphql/fragments/globals/sidebar.fragment.gql';
import CONTACT_FRAGMENT from '~/graphql/fragments/globals/contact.fragment.gql';

import FIND_GLOBALS_QUERY from '~/graphql/queries/findGlobals.gql';

interface GlobalData {
    header: any;
    footer: any;
    textblocks: Array<any>;
    partners: Array<any>;
    socials: Array<any>;
}

const findGlobalsQuery = `
    ${MEDIA_FRAGMENT.loc.source.body}
    ${PARTNERS_FRAGMENT.loc.source.body}
    ${SOCIALS_FRAGMENT.loc.source.body}
    ${TEXTBLOCKS_FRAGMENT.loc.source.body}

    ${HEADER_FRAGMENT.loc.source.body}
    ${FOOTER_FRAGMENT.loc.source.body}
    ${SIDEBAR_FRAGMENT.loc.source.body}
    ${CONTACT_FRAGMENT.loc.source.body}

    ${FIND_GLOBALS_QUERY.loc.source.body}
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

            if (!header || !footer) {
                console.warn('Global data not found');
                return null;
            }

            // Restructure the footer to match the expected component structure
            const restructuredFooter = {
                ...footer,
                address: contact?.address
                    ? {
                          ...contact.address,
                          name: contact.name,
                      }
                    : null,
                contact: {
                    phone: contact?.phone,
                    mail: contact?.mail,
                },
                partners,
                socials,
            };

            // Add sidebar to header if it exists
            const restructuredHeader = {
                ...header,
                sidebar,
            };

            return {
                header: restructuredHeader,
                footer: restructuredFooter,
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
