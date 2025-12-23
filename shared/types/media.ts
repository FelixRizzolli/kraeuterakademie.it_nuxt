/**
 * Shared Media/Image Types
 * Used across the application for images and media files from PayloadCMS
 */

/**
 * Full media object from PayloadCMS WebMedia collection
 */
export interface Media {
    id: number;
    alt?: string | null;
    url?: string | null;
    thumbnailURL?: string | null;
    filename?: string | null;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    focalX?: number | null;
    focalY?: number | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Simplified media object for common use cases
 */
export interface SimpleMedia {
    id: number;
    alt?: string | null;
    url?: string | null;
    width?: number | null;
    height?: number | null;
}

/**
 * Media relationship - can be either an ID or full Media object
 */
export type MediaRelation = number | Media | null;

/**
 * Props for image/media components
 */
export interface MediaProps {
    media: Media | SimpleMedia;
    loading?: 'lazy' | 'eager';
    scaleAnimation?: boolean;
    sizes?: string;
}
