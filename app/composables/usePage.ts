import WEB_IMAGE_FRAGMENT from '~/graphql/fragments/web/collections/webImage.fragment.gql';

import WEB_ACCORDIONS_FRAGMENT from '~/graphql/fragments/web/blocks/accordions.fragment.gql';
import WEB_ANIMATED_TEXT_FRAGMENT from '~/graphql/fragments/web/blocks/animatedText.fragment.gql';
import WEB_BOOK_LIST_FRAGMENT from '~/graphql/fragments/web/blocks/bookList.fragment.gql';
import WEB_COURSE_LIST_FRAGMENT from '~/graphql/fragments/web/blocks/courseList.fragment.gql';
import WEB_HERO_LARGE_FRAGMENT from '~/graphql/fragments/web/blocks/heroLarge.fragment.gql';
import WEB_HERO_SMALL_FRAGMENT from '~/graphql/fragments/web/blocks/heroSmall.fragment.gql';
import WEB_HIGHLIGHTED_LINKS_FRAGMENT from '~/graphql/fragments/web/blocks/highlightedLinks.fragment.gql';
import WEB_IMAGE_TEXT_FRAGMENT from '~/graphql/fragments/web/blocks/imageText.fragment.gql';
import WEB_INFOS_FRAGMENT from '~/graphql/fragments/web/blocks/infos.fragment.gql';
import WEB_MOOD_PICTURE_FRAGMENT from '~/graphql/fragments/web/blocks/moodPicture.fragment.gql';
import WEB_SWIPER_CARD_FRAGMENT from '~/graphql/fragments/web/blocks/swiperCard.fragment.gql';
import WEB_SWIPER_LARGE_FRAGMENT from '~/graphql/fragments/web/blocks/swiperLarge.fragment.gql';
import WEB_SWIPER_SIMPLE_FRAGMENT from '~/graphql/fragments/web/blocks/swiperSimple.fragment.gql';
import WEB_TEXT_ELEMENT_FRAGMENT from '~/graphql/fragments/web/blocks/textElement.fragment.gql';
import WEB_TITLE_ELEMENT_FRAGMENT from '~/graphql/fragments/web/blocks/titleElement.fragment.gql';

import FIND_WEB_PAGES_QUERY from '~/graphql/queries/findWebPages.gql';

interface ContentComponent {
    name: string;
    data: any;
    settings?: any;
}

interface PageData {
    meta: {
        title?: string;
        description?: string;
        image?: any;
        keywords?: string[];
        noIndex?: boolean;
        canonical?: string;
        schemaType?: string;
        publishedTime?: string;
        modifiedTime?: string;
    };
    contentComponents: ContentComponent[];
}

const findWebPagesQuery = `
    ${WEB_IMAGE_FRAGMENT?.loc?.source?.body}

    ${WEB_ACCORDIONS_FRAGMENT?.loc?.source?.body}
    ${WEB_ANIMATED_TEXT_FRAGMENT?.loc?.source?.body}
    ${WEB_BOOK_LIST_FRAGMENT?.loc?.source?.body}
    ${WEB_COURSE_LIST_FRAGMENT?.loc?.source?.body}
    ${WEB_HERO_LARGE_FRAGMENT?.loc?.source?.body}
    ${WEB_HERO_SMALL_FRAGMENT?.loc?.source?.body}
    ${WEB_HIGHLIGHTED_LINKS_FRAGMENT?.loc?.source?.body}
    ${WEB_IMAGE_TEXT_FRAGMENT?.loc?.source?.body}
    ${WEB_INFOS_FRAGMENT?.loc?.source?.body}
    ${WEB_MOOD_PICTURE_FRAGMENT?.loc?.source?.body}
    ${WEB_SWIPER_CARD_FRAGMENT?.loc?.source?.body}
    ${WEB_SWIPER_LARGE_FRAGMENT?.loc?.source?.body}
    ${WEB_SWIPER_SIMPLE_FRAGMENT?.loc?.source?.body}
    ${WEB_TEXT_ELEMENT_FRAGMENT?.loc?.source?.body}
    ${WEB_TITLE_ELEMENT_FRAGMENT?.loc?.source?.body}

    ${FIND_WEB_PAGES_QUERY?.loc?.source?.body}
`;

export const usePage = () => {
    const gqlQuery = usePayloadGraphQL();

    /**
     * Transforms PayloadCMS block data to application format
     * @param blocks - Raw blocks from PayloadCMS API response
     * @returns Transformed content components
     */
    const transformBlocks = (blocks: any[] = []): ContentComponent[] => {
        return blocks
            .filter((block) => block?.__typename) // Filter out invalid blocks
            .map((block: any) => {
                // Extract component name by removing 'Web' prefix from PayloadCMS block types
                // e.g., 'WebHeroLarge' -> 'HeroLarge'
                const componentName = block?.__typename?.startsWith('Web')
                    ? block.__typename.replace('Web', '')
                    : block.__typename || 'unknown';

                // PayloadCMS blocks structure: { webHeroLargeContent, webHeroLargeSettings, etc. }
                // Find the content and settings fields dynamically
                const blockPrefix = block.__typename.charAt(0).toLowerCase() + block.__typename.slice(1);
                const contentKey = `${blockPrefix}Content`;
                const settingsKey = `${blockPrefix}Settings`;

                return {
                    name: componentName,
                    data: block[contentKey] || block.content || {},
                    settings: block[settingsKey] || block.settings || {},
                };
            });
    };

    /**
     * Fetches page data by slug
     * @param slug - The page slug to fetch
     * @returns Promise with the page data or null if not found
     */
    const fetchPage = async (slug: string): Promise<PageData | null> => {
        try {
            if (!slug) {
                throw new Error('Slug parameter is required');
            }

            const response = await gqlQuery<any>(findWebPagesQuery, {
                where: {
                    slug: { equals: slug },
                },
            });

            const page = response?.data?.WebPages?.docs?.[0];

            if (!page) {
                console.warn(`Page with slug "${slug}" not found`);
                console.log('Available pages:', response?.data?.WebPages?.docs);
                return null;
            }

            return {
                meta: {
                    title: page.title || '',
                    description: page.description || '',
                    image: page.image || null,
                    keywords: page.keywords || [],
                    noIndex: page.noIndex || false,
                    canonical: page.canonical || '',
                    schemaType: page.schemaType || 'WebPage',
                    publishedTime: page.createdAt || '',
                    modifiedTime: page.updatedAt || '',
                },
                contentComponents: transformBlocks(page.blocks || []),
            };
        } catch (error) {
            console.error('Error fetching page data:', error);
            if (error instanceof Error) {
                console.error('Error details:', {
                    message: error.message,
                    stack: error.stack,
                });
            }
            throw error; // Re-throw error for further handling
        }
    };

    return fetchPage;
};
