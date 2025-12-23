/**
 * Shared Types for PayloadCMS Global Data
 * Used for Header, Footer, Sidebar, Contact, and other global configurations
 */

import type { Link, NavigationLink } from './links';
import type { Media } from './media';
import type { RichText } from './richtext';

/**
 * Header Global
 */
export interface Header {
    id: number;
    links?: NavigationLink[] | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Sidebar Global
 */
export interface Sidebar {
    id: number;
    links?: NavigationLink[] | null;
    logoLink?: {
        href?: string | null;
        text?: string | null;
        target?: ('_self' | '_blank') | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Header with Sidebar (combined structure used in app)
 */
export interface HeaderWithSidebar extends Header {
    sidebar?: Sidebar | null;
}

/**
 * Contact Global
 */
export interface Contact {
    id: number;
    name?: string | null;
    phone?: Link | null;
    mail?: Link | null;
    address?: {
        street?: string | null;
        place?: string | null;
    } | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Contact data structure used in Footer
 */
export interface ContactData {
    phone?: Link | null;
    mail?: Link | null;
}

/**
 * Address data structure
 */
export interface AddressData {
    name?: string | null;
    street?: string | null;
    place?: string | null;
}

/**
 * Footer Global
 */
export interface Footer {
    id: number;
    text1?: RichText;
    text2?: RichText;
    links?: NavigationLink[] | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Enhanced Footer with related data (used in app components)
 */
export interface FooterData extends Footer {
    address?: AddressData | null;
    contact?: ContactData | null;
    partners?: Partner[] | null;
    socials?: Social[] | null;
}

/**
 * Partner from WebPartners collection
 */
export interface Partner {
    id: number;
    name?: string | null;
    link?: Link | null;
    image?: Media | number | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Social from WebSocials collection
 */
export interface Social {
    id: number;
    link?: Link | null;
    icon?: ('facebook' | 'instagram') | null;
    backgroundImage?: Media | number | null;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Text Block from WebTextBlocks collection
 */
export interface TextBlock {
    id: number;
    slug: string;
    value: string;
    updatedAt?: string | null;
    createdAt?: string | null;
}

/**
 * Complete Global Data structure
 */
export interface GlobalData {
    header?: HeaderWithSidebar | null;
    footer?: FooterData | null;
    textblocks?: TextBlock[] | null;
    partners?: Partner[] | null;
    socials?: Social[] | null;
}
