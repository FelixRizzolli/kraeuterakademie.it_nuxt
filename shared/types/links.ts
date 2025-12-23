/**
 * Shared Link Types
 * Used across the application for navigation and external links
 */

/**
 * Link target options (standard HTML target attribute values)
 */
export type LinkTarget = '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop';

/**
 * Standard link object used throughout the application
 */
export interface Link {
    href?: string | null;
    text?: string | null;
    target?: LinkTarget | null;
}

/**
 * Link with required fields (for cases where link must be complete)
 */
export interface RequiredLink {
    href: string;
    text: string;
    target?: LinkTarget;
}

/**
 * Link array type
 */
export type Links = Link[];

/**
 * Navigation link with optional ID
 */
export interface NavigationLink extends Link {
    id?: string | null;
}

/**
 * Props for link components
 */
export interface LinkProps {
    link: Link;
    class?: string;
    ariaLabel?: string;
}
