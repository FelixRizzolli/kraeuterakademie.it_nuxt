/**
 * Shared Types for PayloadCMS Global Data
 * Used for Header, Footer, Sidebar, Contact, and other global configurations
 */

import type { Link } from './links';

/**
 * Header with Sidebar (combined structure used in app)
 */
export interface HeaderWithSidebar extends Header {
    sidebar?: Sidebar | null;
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
    image?: WebMedia | number | null;
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
    backgroundImage?: WebMedia | number | null;
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
