/**
 * Shared type definitions for the Nuxt application
 * These types are auto-imported throughout the app
 */

export interface StrapiImage {
    alternativeText: string | null;
    url: string;
}

export interface Link {
    href: string;
    text: string;
    target?: string;
}

export interface WebMedia {
    id: string;
    url: string;
    alt?: string | null;
    mimeType?: string;
}
