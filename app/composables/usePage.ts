import STRAPI_ERROR_FRAGMENT from '~/graphql/fragments/strapi/error.fragment.gql';
import STRAPI_UPLOAD_FILE_FRAGMENT from '~/graphql/fragments/strapi/uploadFile.fragment.gql';

import SHARED_SEO_FRAGMENT from '~/graphql/fragments/shared/seo.fragment.gql';

import ELEMENT_ACCORDION_FRAGMENT from '~/graphql/fragments/elements/accordion.fragment.gql';
import ELEMENT_BOOK_FRAGMENT from '~/graphql/fragments/elements/book.fragment.gql';
import ELEMENT_COURSE_FRAGMENT from '~/graphql/fragments/elements/course.fragment.gql';
import ELEMENT_INFO_FRAGMENT from '~/graphql/fragments/elements/info.fragment.gql';
import ELEMENT_LINK_FRAGMENT from '~/graphql/fragments/elements/link.fragment.gql';
import ELEMENT_SIMPLE_DATE_FRAMENT from '~/graphql/fragments/elements/simpleDate.fragment.gql';

import CONTENT_ACCORDIONS_FRAGMENT from '~/graphql/fragments/content/accordions.fragment.gql';
import CONTENT_ANIMATED_TEXT_FRAGMENT from '~/graphql/fragments/content/animatedText.fragment.gql';
import CONTENT_BOOK_LIST_FRAGMENT from '~/graphql/fragments/content/bookList.fragment.gql';
import CONTENT_COURSE_LIST_FRAGMENT from '~/graphql/fragments/content/courseList.fragment.gql';
import CONTENT_HERO_BIG_FRAGMENT from '~/graphql/fragments/content/heroLarge.fragment.gql';
import CONTENT_HERO_SMALL_FRAGMENT from '~/graphql/fragments/content/heroSmall.fragment.gql';
import CONTENT_IMAGE_TEXT_FRAGMENT from '~/graphql/fragments/content/imageText.fragment.gql';
import CONTENT_INFOS_FRAGMENT from '~/graphql/fragments/content/infos.fragment.gql';
import CONTENT_MOOD_PICTURE_FRAGMENT from '~/graphql/fragments/content/moodPicture.fragment.gql';
import CONTENT_SWIPER_SIMPLE_FRAGMENT from '~/graphql/fragments/content/swiperSimple.fragment.gql';
import CONTENT_TEXT_ELEMENT_FRAGMENT from '~/graphql/fragments/content/textElement.fragment.gql';

import FIND_PAGES_QUERY from '~/graphql/queries/findPages.gql';

interface ContentComponent {
    name: string;
    data: any;
    settings?: any;
}

interface PageData {
    seo: any;
    contentComponents: ContentComponent[];
}

const findPagesQuery = `
    ${STRAPI_ERROR_FRAGMENT.loc.source.body}
    ${STRAPI_UPLOAD_FILE_FRAGMENT.loc.source.body}

    ${SHARED_SEO_FRAGMENT.loc.source.body}

    ${ELEMENT_ACCORDION_FRAGMENT.loc.source.body}
    ${ELEMENT_BOOK_FRAGMENT.loc.source.body}
    ${ELEMENT_COURSE_FRAGMENT.loc.source.body}
    ${ELEMENT_INFO_FRAGMENT.loc.source.body}
    ${ELEMENT_LINK_FRAGMENT.loc.source.body}
    ${ELEMENT_SIMPLE_DATE_FRAMENT.loc.source.body}

    ${CONTENT_ACCORDIONS_FRAGMENT.loc.source.body}
    ${CONTENT_ANIMATED_TEXT_FRAGMENT.loc.source.body}
    ${CONTENT_BOOK_LIST_FRAGMENT.loc.source.body}
    ${CONTENT_COURSE_LIST_FRAGMENT.loc.source.body}
    ${CONTENT_HERO_BIG_FRAGMENT.loc.source.body}
    ${CONTENT_HERO_SMALL_FRAGMENT.loc.source.body}
    ${CONTENT_IMAGE_TEXT_FRAGMENT.loc.source.body}
    ${CONTENT_INFOS_FRAGMENT.loc.source.body}
    ${CONTENT_MOOD_PICTURE_FRAGMENT.loc.source.body}
    ${CONTENT_SWIPER_SIMPLE_FRAGMENT.loc.source.body}
    ${CONTENT_TEXT_ELEMENT_FRAGMENT.loc.source.body}

    ${FIND_PAGES_QUERY.loc.source.body}
`;

export const usePage = () => {
    const gqlQuery = useStrapiGraphQL();

    /**
     * Transforms component data from API format to application format
     * @param components - Raw components from API response
     * @returns Transformed content components
     */
    const transformComponents = (components: any[] = []): any[] => {
        return components
            .filter((component) => component.__typename && !component.code) // Filter out error components
            .map((component) => {
                // Extract component name by removing the prefix, handling different formats
                const componentName = component.__typename.startsWith('ComponentContent')
                    ? component.__typename.replace('ComponentContent', '')
                    : component.__typename;

                return {
                    name: componentName,
                    data: component.data || {},
                    settings: component.settings || {},
                };
            });
    };

    /**
     * Fetches page data by URL
     * @param url - The page URL to fetch
     * @returns Promise with the page data or null if not found
     */
    const fetchPage = async (url: string): Promise<PageData | null> => {
        try {
            if (!url) {
                throw new Error('URL parameter is required');
            }

            const response = await gqlQuery<any>(findPagesQuery, {
                filters: {
                    url: { eq: url },
                },
            });

            const page = response?.data?.pages?.[0];

            if (!page) {
                console.warn(`Page with URL "${url}" not found`);
                return null;
            }

            return {
                seo: page.seo || {},
                contentComponents: transformComponents(page.components),
            };
        } catch (error) {
            console.error('Error fetching page data:', error);
            throw error; // Re-throw error for further handling
        }
    };

    return fetchPage;
};
