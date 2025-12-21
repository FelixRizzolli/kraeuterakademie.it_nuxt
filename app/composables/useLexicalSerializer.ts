/**
 * Composable for serializing PayloadCMS Lexical Editor JSON to HTML
 * Use this when you need plain HTML output instead of Vue components
 */

// Lexical Node Types
interface LexicalNode {
    type: string;
    version?: number;
    [key: string]: any;
}

interface TextNode extends LexicalNode {
    type: 'text';
    text: string;
    format?: number;
    style?: string;
}

interface RootNode extends LexicalNode {
    type: 'root';
    children: LexicalNode[];
}

// Text format flags (bitwise)
const TEXT_FORMAT = {
    BOLD: 1,
    ITALIC: 2,
    STRIKETHROUGH: 4,
    UNDERLINE: 8,
    CODE: 16,
    SUBSCRIPT: 32,
    SUPERSCRIPT: 64,
} as const;

// Escape HTML special characters
function escapeHtml(text: string): string {
    const htmlEscapes: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    };
    return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] ?? char);
}

// Serialize text node with formatting
function serializeTextNode(node: TextNode): string {
    let html = escapeHtml(node.text);
    const format = node.format || 0;

    if (format & TEXT_FORMAT.CODE) {
        html = `<code>${html}</code>`;
    }
    if (format & TEXT_FORMAT.SUBSCRIPT) {
        html = `<sub>${html}</sub>`;
    }
    if (format & TEXT_FORMAT.SUPERSCRIPT) {
        html = `<sup>${html}</sup>`;
    }
    if (format & TEXT_FORMAT.STRIKETHROUGH) {
        html = `<s>${html}</s>`;
    }
    if (format & TEXT_FORMAT.UNDERLINE) {
        html = `<u>${html}</u>`;
    }
    if (format & TEXT_FORMAT.ITALIC) {
        html = `<em>${html}</em>`;
    }
    if (format & TEXT_FORMAT.BOLD) {
        html = `<strong>${html}</strong>`;
    }

    return html;
}

// Serialize children recursively
function serializeChildren(children: LexicalNode[]): string {
    if (!children || !Array.isArray(children)) return '';
    return children.map((child) => serializeNode(child)).join('');
}

// Main serialization function
function serializeNode(node: LexicalNode): string {
    if (!node) return '';

    switch (node.type) {
        case 'text':
            return serializeTextNode(node as TextNode);

        case 'paragraph': {
            const children = serializeChildren(node.children);
            const indent = node.indent ? ` style="margin-left: ${node.indent * 2}em"` : '';
            return `<p${indent}>${children}</p>`;
        }

        case 'heading': {
            const tag = node.tag || 'h2';
            return `<${tag}>${serializeChildren(node.children)}</${tag}>`;
        }

        case 'list': {
            const tag = node.listType === 'number' ? 'ol' : 'ul';
            const classAttr = node.listType === 'check' ? ' class="lexical-checklist"' : '';
            const startAttr = node.start && node.start !== 1 ? ` start="${node.start}"` : '';
            return `<${tag}${classAttr}${startAttr}>${serializeChildren(node.children)}</${tag}>`;
        }

        case 'listitem': {
            let classAttr = '';
            if (node.checked !== undefined) {
                classAttr = ` class="${node.checked ? 'lexical-checked' : 'lexical-unchecked'}"`;
            }
            const valueAttr = node.value ? ` value="${node.value}"` : '';
            return `<li${classAttr}${valueAttr}>${serializeChildren(node.children)}</li>`;
        }

        case 'link':
        case 'autolink': {
            const href = ` href="${escapeHtml(node.url || '')}"`;
            const target = node.target ? ` target="${escapeHtml(node.target)}"` : '';
            let rel = '';
            if (node.rel) {
                rel = ` rel="${escapeHtml(node.rel)}"`;
            } else if (node.target === '_blank') {
                rel = ' rel="noopener noreferrer"';
            }
            return `<a${href}${target}${rel}>${serializeChildren(node.children)}</a>`;
        }

        case 'quote':
            return `<blockquote>${serializeChildren(node.children)}</blockquote>`;

        case 'upload': {
            if (!node.value) return '';
            const src = ` src="${escapeHtml(node.value.url || '')}"`;
            const alt = ` alt="${escapeHtml(node.value.alt || node.value.filename || '')}"`;
            const width = node.value.width ? ` width="${node.value.width}"` : '';
            const height = node.value.height ? ` height="${node.value.height}"` : '';
            return `<img${src}${alt}${width}${height} loading="lazy">`;
        }

        case 'horizontalrule':
            return '<hr>';

        case 'linebreak':
            return '<br>';

        case 'block': {
            const blockType = node.fields?.blockType || 'unknown';
            return `<div class="lexical-block" data-block-type="${escapeHtml(blockType)}">[Block: ${escapeHtml(blockType)}]</div>`;
        }

        case 'tab':
            return '\t';

        default:
            // Handle unknown node types with children
            if ('children' in node && Array.isArray(node.children)) {
                return `<div>${serializeChildren(node.children)}</div>`;
            }
            console.warn(`Unknown Lexical node type: ${node.type}`, node);
            return '';
    }
}

/**
 * Serialize Lexical JSON to HTML string
 * @param lexicalData - Lexical JSON data (can be array of nodes or { root: { children: [] } })
 * @returns HTML string
 */
export function serializeLexicalToHtml(lexicalData: LexicalNode[] | { root: RootNode } | null | undefined): string {
    if (!lexicalData) return '';

    // Handle Payload's format: { root: { children: [] } }
    if ('root' in lexicalData && lexicalData.root?.children) {
        return serializeChildren(lexicalData.root.children);
    }

    // Handle direct array of nodes
    if (Array.isArray(lexicalData)) {
        return serializeChildren(lexicalData);
    }

    return '';
}

/**
 * Composable for Lexical serialization utilities
 */
export function useLexicalSerializer() {
    return {
        serializeToHtml: serializeLexicalToHtml,
        serializeNode,
        serializeChildren,
    };
}
