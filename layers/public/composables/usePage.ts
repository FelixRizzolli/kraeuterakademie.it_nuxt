import PUBLIC_IMAGE_FRAGMENT from '~/graphql/fragments/public/collections/publicImage.fragment.gql';

import PUBLIC_ACCORDIONS_FRAGMENT from '~/graphql/fragments/public/blocks/accordions.fragment.gql';
import PUBLIC_ANIMATED_TEXT_FRAGMENT from '~/graphql/fragments/public/blocks/animatedText.fragment.gql';
import PUBLIC_BOOK_LIST_FRAGMENT from '~/graphql/fragments/public/blocks/bookList.fragment.gql';
import PUBLIC_COURSE_LIST_FRAGMENT from '~/graphql/fragments/public/blocks/courseList.fragment.gql';
import PUBLIC_HERO_LARGE_FRAGMENT from '~/graphql/fragments/public/blocks/heroLarge.fragment.gql';
import PUBLIC_HERO_SMALL_FRAGMENT from '~/graphql/fragments/public/blocks/heroSmall.fragment.gql';
import PUBLIC_HIGHLIGHTED_LINKS_FRAGMENT from '~/graphql/fragments/public/blocks/highlightedLinks.fragment.gql';
import PUBLIC_IMAGE_TEXT_FRAGMENT from '~/graphql/fragments/public/blocks/imageText.fragment.gql';
import PUBLIC_INFOS_FRAGMENT from '~/graphql/fragments/public/blocks/infos.fragment.gql';
import PUBLIC_MOOD_PICTURE_FRAGMENT from '~/graphql/fragments/public/blocks/moodPicture.fragment.gql';
import PUBLIC_SWIPER_CARD_FRAGMENT from '~/graphql/fragments/public/blocks/swiperCard.fragment.gql';
import PUBLIC_SWIPER_LARGE_FRAGMENT from '~/graphql/fragments/public/blocks/swiperLarge.fragment.gql';
import PUBLIC_SWIPER_SIMPLE_FRAGMENT from '~/graphql/fragments/public/blocks/swiperSimple.fragment.gql';
import PUBLIC_TEXT_ELEMENT_FRAGMENT from '~/graphql/fragments/public/blocks/textElement.fragment.gql';
import PUBLIC_TITLE_ELEMENT_FRAGMENT from '~/graphql/fragments/public/blocks/titleElement.fragment.gql';

import FIND_PUBLIC_PAGES_QUERY from '~/graphql/queries/findPublicPages.gql';

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

const findPublicPagesQuery = `
    ${PUBLIC_IMAGE_FRAGMENT?.loc?.source?.body}

    ${PUBLIC_ACCORDIONS_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_ANIMATED_TEXT_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_BOOK_LIST_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_COURSE_LIST_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_HERO_LARGE_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_HERO_SMALL_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_HIGHLIGHTED_LINKS_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_IMAGE_TEXT_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_INFOS_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_MOOD_PICTURE_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_SWIPER_CARD_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_SWIPER_LARGE_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_SWIPER_SIMPLE_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_TEXT_ELEMENT_FRAGMENT?.loc?.source?.body}
    ${PUBLIC_TITLE_ELEMENT_FRAGMENT?.loc?.source?.body}

    ${FIND_PUBLIC_PAGES_QUERY?.loc?.source?.body}
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
                // Extract component name by removing 'Public' prefix from PayloadCMS block types
                // e.g., 'PublicHeroLarge' -> 'HeroLarge'
                const componentName = block?.__typename?.startsWith('Public')
                    ? block.__typename.replace('Public', '')
                    : block.__typename || 'unknown';

                // PayloadCMS blocks structure: { publicHeroLargeContent, publicHeroLargeSettings, etc. }
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

            const response = await gqlQuery<any>(findPublicPagesQuery, {
                where: {
                    slug: { equals: slug },
                },
            });

            const page = response?.data?.PublicPages?.docs?.[0];

            if (!page) {
                console.warn(`Page with slug "${slug}" not found`);
                console.log('Available pages:', response?.data?.PublicPages?.docs);
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
                    schemaType: page.schemaType || 'PublicPage',
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
