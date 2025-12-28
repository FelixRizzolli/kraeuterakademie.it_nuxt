interface StructuredDataConfig {
    type: string;
    title?: string;
    description?: string;
    image?: {
        url?: string;
        alt?: string;
        width?: number;
        height?: number;
    } | null;
    publishedTime?: string;
    modifiedTime?: string;
    url?: string;
}

/**
 * Generates and injects JSON-LD structured data for SEO
 * @param config - Configuration for the structured data
 */
export function useStructuredData(config: StructuredDataConfig) {
    const route = useRoute();
    const runtimeConfig = useRuntimeConfig();
    
    const baseUrl = runtimeConfig.public.siteUrl || 'https://example.com';
    const currentUrl = config.url || `${baseUrl}${route.path}`;

    // Base structured data that all types share
    const baseData: any = {
        '@context': 'https://schema.org',
        '@type': config.type,
        name: config.title,
        description: config.description,
        url: currentUrl,
    };

    // Add image if available
    if (config.image?.url) {
        baseData.image = {
            '@type': 'ImageObject',
            url: config.image.url,
            width: config.image.width,
            height: config.image.height,
            caption: config.image.alt,
        };
    }

    // Add date fields for Article/BlogPosting types
    if (config.type === 'Article' || config.type === 'BlogPosting') {
        if (config.publishedTime) {
            baseData.datePublished = config.publishedTime;
        }
        if (config.modifiedTime) {
            baseData.dateModified = config.modifiedTime;
        }
        // You might want to add author info from a global config or user data
        baseData.author = {
            '@type': 'Organization',
            name: runtimeConfig.public.siteName || 'Your Site Name',
        };
    }

    // Add breadcrumb for better navigation understanding
    const pathSegments = route.path.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
        const breadcrumbList = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: baseUrl,
                },
                ...pathSegments.map((segment, index) => ({
                    '@type': 'ListItem',
                    position: index + 2,
                    name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
                    item: `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`,
                })),
            ],
        };

        // Inject both the page data and breadcrumb
        useHead({
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(baseData),
                },
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(breadcrumbList),
                },
            ],
        });
    } else {
        // Just inject the page data
        useHead({
            script: [
                {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify(baseData),
                },
            ],
        });
    }
}
