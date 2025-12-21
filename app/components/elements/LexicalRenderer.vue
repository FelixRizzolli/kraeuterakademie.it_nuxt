<template>
    <component :is="renderNode(node)" v-for="(node, index) in nodes" :key="index" />
</template>

<script lang="ts" setup>
    import { h, type VNode } from 'vue';

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

    interface ParagraphNode extends LexicalNode {
        type: 'paragraph';
        children: LexicalNode[];
        textFormat?: number;
        indent?: number;
    }

    interface HeadingNode extends LexicalNode {
        type: 'heading';
        tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        children: LexicalNode[];
    }

    interface ListNode extends LexicalNode {
        type: 'list';
        listType: 'bullet' | 'number' | 'check';
        children: LexicalNode[];
        start?: number;
    }

    interface ListItemNode extends LexicalNode {
        type: 'listitem';
        children: LexicalNode[];
        checked?: boolean;
        value?: number;
    }

    interface LinkNode extends LexicalNode {
        type: 'link' | 'autolink';
        url: string;
        children: LexicalNode[];
        target?: string;
        rel?: string;
    }

    interface QuoteNode extends LexicalNode {
        type: 'quote';
        children: LexicalNode[];
    }

    interface ImageNode extends LexicalNode {
        type: 'upload';
        value: {
            id: string | number;
            url: string;
            alt?: string;
            width?: number;
            height?: number;
            filename?: string;
        };
        relationTo?: string;
    }

    interface HorizontalRuleNode extends LexicalNode {
        type: 'horizontalrule';
    }

    interface LineBreakNode extends LexicalNode {
        type: 'linebreak';
    }

    interface BlockNode extends LexicalNode {
        type: 'block';
        fields: Record<string, any>;
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

    interface LexicalRendererProps {
        nodes: LexicalNode[] | { root: RootNode };
    }

    const props = defineProps<LexicalRendererProps>();

    // Normalize nodes - handle both direct array and { root: { children: [] } } format
    const normalizedNodes = computed(() => {
        if (!props.nodes) return [];

        // If it's an object with a root property (Payload's format)
        if ('root' in props.nodes && props.nodes.root?.children) {
            return props.nodes.root.children;
        }

        // If it's already an array
        if (Array.isArray(props.nodes)) {
            return props.nodes;
        }

        return [];
    });

    const nodes = normalizedNodes;

    // Render text with formatting
    function renderTextNode(node: TextNode): VNode | string {
        let content: VNode | string = node.text;
        const format = node.format || 0;

        // Apply formatting in order (innermost to outermost)
        if (format & TEXT_FORMAT.CODE) {
            content = h('code', {}, content);
        }
        if (format & TEXT_FORMAT.SUBSCRIPT) {
            content = h('sub', {}, content);
        }
        if (format & TEXT_FORMAT.SUPERSCRIPT) {
            content = h('sup', {}, content);
        }
        if (format & TEXT_FORMAT.STRIKETHROUGH) {
            content = h('s', {}, content);
        }
        if (format & TEXT_FORMAT.UNDERLINE) {
            content = h('u', {}, content);
        }
        if (format & TEXT_FORMAT.ITALIC) {
            content = h('em', {}, content);
        }
        if (format & TEXT_FORMAT.BOLD) {
            content = h('strong', {}, content);
        }

        return content;
    }

    // Render children recursively
    function renderChildren(children: LexicalNode[]): (VNode | string)[] {
        if (!children || !Array.isArray(children)) return [];
        return children.map((child) => renderNode(child)).filter(Boolean) as (VNode | string)[];
    }

    // Main render function
    function renderNode(node: LexicalNode): VNode | string | null {
        if (!node) return null;

        switch (node.type) {
            case 'text':
                return renderTextNode(node as TextNode);

            case 'paragraph': {
                const paragraphNode = node as ParagraphNode;
                const children = renderChildren(paragraphNode.children);
                const attrs: Record<string, any> = {};
                if (paragraphNode.indent) {
                    attrs.style = { marginLeft: `${paragraphNode.indent * 2}em` };
                }
                return h('p', attrs, children);
            }

            case 'heading': {
                const headingNode = node as HeadingNode;
                return h(headingNode.tag, {}, renderChildren(headingNode.children));
            }

            case 'list': {
                const listNode = node as ListNode;
                const tag = listNode.listType === 'number' ? 'ol' : 'ul';
                const attrs: Record<string, any> = {};
                if (listNode.listType === 'check') {
                    attrs.class = 'lexical-checklist';
                }
                if (listNode.start && listNode.start !== 1) {
                    attrs.start = listNode.start;
                }
                return h(tag, attrs, renderChildren(listNode.children));
            }

            case 'listitem': {
                const listItemNode = node as ListItemNode;
                const attrs: Record<string, any> = {};
                if (listItemNode.checked !== undefined) {
                    attrs.class = listItemNode.checked ? 'lexical-checked' : 'lexical-unchecked';
                }
                if (listItemNode.value) {
                    attrs.value = listItemNode.value;
                }
                return h('li', attrs, renderChildren(listItemNode.children));
            }

            case 'link':
            case 'autolink': {
                const linkNode = node as LinkNode;
                const attrs: Record<string, any> = {
                    href: linkNode.url,
                };
                if (linkNode.target) {
                    attrs.target = linkNode.target;
                }
                if (linkNode.rel) {
                    attrs.rel = linkNode.rel;
                } else if (linkNode.target === '_blank') {
                    attrs.rel = 'noopener noreferrer';
                }
                return h('a', attrs, renderChildren(linkNode.children));
            }

            case 'quote':
                return h('blockquote', {}, renderChildren((node as QuoteNode).children));

            case 'upload': {
                const imageNode = node as ImageNode;
                if (!imageNode.value) return null;

                const attrs: Record<string, any> = {
                    src: imageNode.value.url,
                    alt: imageNode.value.alt || imageNode.value.filename || '',
                    loading: 'lazy',
                };
                if (imageNode.value.width) {
                    attrs.width = imageNode.value.width;
                }
                if (imageNode.value.height) {
                    attrs.height = imageNode.value.height;
                }
                return h('img', attrs);
            }

            case 'horizontalrule':
                return h('hr');

            case 'linebreak':
                return h('br');

            case 'block': {
                // Custom blocks - emit an event or render a placeholder
                const blockNode = node as BlockNode;
                return h(
                    'div',
                    {
                        'class': 'lexical-block',
                        'data-block-type': blockNode.fields?.blockType || 'unknown',
                    },
                    `[Block: ${blockNode.fields?.blockType || 'unknown'}]`,
                );
            }

            case 'tab':
                return '\t';

            default:
                // Handle unknown node types with children
                if ('children' in node && Array.isArray(node.children)) {
                    return h('div', {}, renderChildren(node.children));
                }
                console.warn(`Unknown Lexical node type: ${node.type}`, node);
                return null;
        }
    }
</script>

<style lang="scss" scoped></style>
