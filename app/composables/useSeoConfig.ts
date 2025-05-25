export function useSeoConfig(seo: any) {
    if (!seo) return;

    useSeoMeta({
        title: seo.metaTitle ?? '',
        description: seo.metaDescription ?? '',
        keywords: seo.keywords ?? '',
        robots: seo.preventIndexing ? 'noindex, nofollow' : 'index, follow',
        ogTitle: seo.metaTitle ?? '',
        ogDescription: seo.metaDescription ?? '',
        ogImage: seo.sharedImage?.media?.url ?? '',
        ogImageAlt: seo.sharedImage?.alt ?? '',
        twitterTitle: seo.metaTitle ?? '',
        twitterDescription: seo.metaDescription ?? '',
        twitterImage: seo.sharedImage?.media?.url ?? '',
    });
}
