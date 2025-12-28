/**
 * Shared Rich Text Types
 * Used for Lexical rich text content from PayloadCMS
 */

/**
 * Lexical editor node types
 */
export type LexicalNodeType = 'root' | 'paragraph' | 'text' | 'heading' | 'list' | 'listitem' | 'quote' | 'link';

/**
 * Text formatting options
 */
export interface TextFormat {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

/**
 * Base Lexical node structure
 */
export interface LexicalNode {
    type: LexicalNodeType;
    version: number;
    [key: string]: any;
}

/**
 * Lexical root structure
 */
export interface LexicalRoot {
    root: {
        type: string;
        children: LexicalNode[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
    };
    [key: string]: any;
}

/**
 * Rich text content type (can be Lexical or other formats)
 */
export type RichText = LexicalRoot | null;

/**
 * Props for rich text renderer components
 */
export interface RichTextProps {
    nodes: RichText;
    className?: string;
}
