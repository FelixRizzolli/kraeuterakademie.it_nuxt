/**
 * Shared Media/Image Types
 * Used across the application for images and media files from PayloadCMS
 */

/**
 * Simplified media object for common use cases
 */
export interface SimpleWebMedia {
    alt?: string | null;
    url?: string | null;
}

/**
 * Media relationship - can be either an ID or full Media object
 */
export type MediaRelation = number | WebMedia | null;

/**
 * Props for image/media components
 */
export interface MediaProps {
    media: WebMedia | SimpleWebMedia;
    loading?: 'lazy' | 'eager';
    scaleAnimation?: boolean;
    sizes?: string;
}
