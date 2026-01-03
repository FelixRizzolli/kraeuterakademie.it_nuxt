interface PayloadSeoMeta {
    title?: string;
    description?: string;
    image?: {
        url?: string;
        alt?: string;
        width?: number;
        height?: number;
    } | null;
    keywords?: string[];
    noIndex?: boolean;
    canonical?: string;
    schemaType?: string;
    publishedTime?: string;
    modifiedTime?: string;
}

export function useSeoConfig(meta: PayloadSeoMeta | null | undefined) {
    if (!meta) return;

    const imageUrl = meta.image?.url ?? '';
    const imageAlt = meta.image?.alt ?? '';
    const route = useRoute();
    const config = useRuntimeConfig();

    // Build canonical URL
    const canonicalUrl = meta.canonical || `${config.public.siteUrl}${route.path}`;

    // Build keywords string
    const keywordsString = Array.isArray(meta.keywords) ? meta.keywords.join(', ') : '';

    // Set basic SEO meta tags
    useSeoMeta({
        title: meta.title ?? '',
        description: meta.description ?? '',
        keywords: keywordsString,
        robots: meta.noIndex ? 'noindex, nofollow' : 'index, follow',
        ogTitle: meta.title ?? '',
        ogDescription: meta.description ?? '',
        ogImage: imageUrl,
        ogImageAlt: imageAlt,
        ogType: 'website',
        twitterTitle: meta.title ?? '',
        twitterDescription: meta.description ?? '',
        twitterImage: imageUrl,
        twitterCard: imageUrl ? 'summary_large_image' : 'summary',
        articlePublishedTime: meta.publishedTime,
        articleModifiedTime: meta.modifiedTime,
    });

    // Set additional head elements
    useHead({
        link: [
            {
                rel: 'canonical',
                href: canonicalUrl,
            },
        ],
    });
}
