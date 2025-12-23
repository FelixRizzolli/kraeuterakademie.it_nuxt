/**
 * Central export for all shared types
 * Import from this file to get all types in one place
 * These types are auto-imported throughout the app via Nuxt auto-imports
 */

// Media types
export type { Media, SimpleMedia, MediaRelation, MediaProps } from './media';

// Link types
export type { Link, RequiredLink, Links, NavigationLink, LinkProps, LinkTarget } from './links';

// Layout types
export type { Spacing, SpacingOption, StyleOption, BlockSettings, BaseBlock, BlockWithSettings } from './layout';

// Rich text types
export type { RichText, LexicalRoot, LexicalNode, LexicalNodeType, TextFormat, RichTextProps } from './richtext';

// Global types
export type {
    Header,
    Sidebar,
    HeaderWithSidebar,
    Contact,
    ContactData,
    AddressData,
    Footer,
    FooterData,
    Partner,
    Social,
    TextBlock,
    GlobalData,
} from './globals';

// Collection types
export type {
    SEO,
    WebPage,
    WebPagesPaginated,
    WebBlock,
    WebAccordions,
    WebAnimatedText,
    WebBookList,
    WebCourseList,
    WebHeroLarge,
    WebHeroSmall,
    WebHighlightedLinks,
    WebImageText,
    WebInfos,
    WebMoodPicture,
    WebSwiperCard,
    WebSwiperLarge,
    WebSwiperSimple,
    WebTextElement,
} from './collections';
