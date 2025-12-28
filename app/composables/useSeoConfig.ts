interface PayloadSeoMeta {
    title?: string;
    description?: string;
    image?: {
        url?: string;
        alt?: string;
        width?: number;
        height?: number;
    } | null;
}

export function useSeoConfig(meta: PayloadSeoMeta | null | undefined) {
    if (!meta) return;

    const imageUrl = meta.image?.url ?? '';
    const imageAlt = meta.image?.alt ?? '';

    useSeoMeta({
        title: meta.title ?? '',
        description: meta.description ?? '',
        ogTitle: meta.title ?? '',
        ogDescription: meta.description ?? '',
        ogImage: imageUrl,
        ogImageAlt: imageAlt,
        twitterTitle: meta.title ?? '',
        twitterDescription: meta.description ?? '',
        twitterImage: imageUrl,
        twitterCard: imageUrl ? 'summary_large_image' : 'summary',
    });
}
