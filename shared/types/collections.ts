/**
 * Shared Types for PayloadCMS Collections
 * WebPages, WebMedia, and other content collections
 */

/**
 * SEO metadata
 */
export interface SEO {
    title?: string | null;
    description?: string | null;
    image?: WebMedia | number | null;
    keywords?: string | null;
}
