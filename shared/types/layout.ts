/**
 * Shared Layout Types
 * Used for spacing, styling, and layout configurations across blocks and sections
 */

/**
 * Spacing options for margins and padding
 */
export type SpacingOption = 'none' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Spacing configuration for a block or section
 */
export interface Spacing {
    marginTop?: SpacingOption | string | null;
    marginBottom?: SpacingOption | string | null;
    paddingTop?: SpacingOption | string | null;
    paddingBottom?: SpacingOption | string | null;
}

/**
 * Style/theme options for blocks and sections
 */
export type StyleOption = 'light' | 'gray' | 'dark';

/**
 * Block settings that include spacing and style
 */
export interface BlockSettings {
    spacing?: Spacing | null;
    style?: StyleOption | null;
}

/**
 * Base block interface that all content blocks extend
 */
export interface BaseBlock {
    id: string;
    blockName?: string | null;
    blockType: string;
}

/**
 * Block with content and settings structure (common pattern)
 */
export interface BlockWithSettings<TContent = any, TSettings = BlockSettings> extends BaseBlock {
    content?: TContent | null;
    settings?: TSettings | null;
}
