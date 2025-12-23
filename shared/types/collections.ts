/**
 * Shared Types for PayloadCMS Collections
 * WebPages, WebMedia, and other content collections
 */

import type { Media } from './media';
import type { RichText } from './richtext';
import type { Link } from './links';
import type { BaseBlock } from './layout';

/**
 * SEO metadata
 */
export interface SEO {
    title?: string | null;
    description?: string | null;
    image?: Media | number | null;
    keywords?: string | null;
}

/**
 * Web Page from WebPages collection
 */
export interface WebPage {
    id: number;
    slug: string;
    title?: string | null;
    description?: string | null;
    image?: Media | number | null;
    blocks?: WebBlock[] | null;
    seo?: SEO | null;
    updatedAt?: string | null;
    createdAt?: string | null;
    publishedAt?: string | null;
}

/**
 * Paginated response for WebPages
 */
export interface WebPagesPaginated {
    docs: WebPage[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage?: number | null;
    offset?: number | null;
    page?: number | null;
    pagingCounter?: number | null;
    prevPage?: number | null;
    totalDocs: number;
    totalPages: number;
}

/**
 * Union type for all possible web blocks
 * Extend this as you add more block types
 */
export type WebBlock =
    | WebAccordions
    | WebAnimatedText
    | WebBookList
    | WebCourseList
    | WebHeroLarge
    | WebHeroSmall
    | WebHighlightedLinks
    | WebImageText
    | WebInfos
    | WebMoodPicture
    | WebSwiperCard
    | WebSwiperLarge
    | WebSwiperSimple
    | WebTextElement;

/**
 * Example Block Types - expand these based on your actual block structures
 */
export interface WebAccordions extends BaseBlock {
    blockType: 'web-accordions';
    // Add specific content and settings
}

export interface WebAnimatedText extends BaseBlock {
    blockType: 'web-animatedText';
    // Add specific content and settings
}

export interface WebBookList extends BaseBlock {
    blockType: 'web-book-list';
    // Add specific content and settings
}

export interface WebCourseList extends BaseBlock {
    blockType: 'web-course-list';
    // Add specific content and settings
}

export interface WebHeroLarge extends BaseBlock {
    blockType: 'web-hero-large';
    // Add specific content and settings
}

export interface WebHeroSmall extends BaseBlock {
    blockType: 'web-hero-small';
    content?: {
        title?: string | null;
        image?: Media | number | null;
        link?: Link | null;
    };
    // Add specific settings
}

export interface WebHighlightedLinks extends BaseBlock {
    blockType: 'web-highlighted-links';
    // Add specific content and settings
}

export interface WebImageText extends BaseBlock {
    blockType: 'web-image-text';
    content?: {
        title?: string | null;
        image?: Media | number | null;
        textTop?: RichText;
        textHighlight?: string | null;
        textBottom?: RichText;
        link?: Link | null;
    };
    // Add specific settings
}

export interface WebInfos extends BaseBlock {
    blockType: 'web-infos';
    // Add specific content and settings
}

export interface WebMoodPicture extends BaseBlock {
    blockType: 'web-mood-picture';
    // Add specific content and settings
}

export interface WebSwiperCard extends BaseBlock {
    blockType: 'web-swiper-card';
    // Add specific content and settings
}

export interface WebSwiperLarge extends BaseBlock {
    blockType: 'web-swiper-large';
    // Add specific content and settings
}

export interface WebSwiperSimple extends BaseBlock {
    blockType: 'web-swiper-simple';
    // Add specific content and settings
}

export interface WebTextElement extends BaseBlock {
    blockType: 'web-text-element';
    content?: {
        title?: string | null;
        content?: RichText;
        link?: Link | null;
    };
    // Add specific settings
}
