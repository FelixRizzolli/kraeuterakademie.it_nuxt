<template>
    <component
        :is="div ? 'div' : 'section'"
        class="section-element"
        :class="[
            'pt-' + (spacing?.paddingTop ?? 'none'),
            'pb-' + (spacing?.paddingBottom ?? 'none'),
            'mt' + (spacing?.marginTop ?? 'none'),
            'mb-' + (spacing?.marginBottom ?? 'large'),
            'style-' + (style ?? 'light'),
        ]"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
    interface SectionElementProps {
        spacing: Spacing;
        style?: string; // e.g., 'light', 'dark', 'gray'
        div?: boolean;
    }

    const props = defineProps<SectionElementProps>();
</script>

<style lang="scss" scoped>
    .section-element.style-light {
        background-color: $colorBackgroundWhite;
        color: $colorFont;
    }
    .section-element.style-gray {
        background-color: $colorBackgroundCream;
        color: $colorFont;
    }
    .section-element.style-dark {
        background-color: $colorBackgroundBrown;
        color: $colorFontWhite;

        :deep(a) {
            color: $colorFontWhite;

            &:hover {
                opacity: 0.6;
            }
        }
    }

    .pt-small {
        padding-top: 4.5rem;
    }
    .pt-medium {
        padding-top: 7.5rem;
    }
    .pt-large {
        padding-top: 15rem;
    }
    .pt-xlarge {
        padding-top: 18rem;
    }

    .pb-small {
        padding-bottom: 4.5rem;
    }
    .pb-medium {
        padding-bottom: 7.5rem;
    }
    .pb-large {
        padding-bottom: 15rem;
    }
    .pb-xlarge {
        padding-bottom: 18rem;
    }

    .mt-small {
        margin-top: 4.5rem;
    }
    .mt-medium {
        margin-top: 7.5rem;
    }
    .mt-large {
        margin-top: 15rem;
    }
    .mt-xlarge {
        margin-top: 18rem;
    }

    .mb-small {
        margin-bottom: 4.5rem;
    }
    .mb-medium {
        margin-bottom: 7.5rem;
    }
    .mb-large {
        margin-bottom: 15rem;
    }
    .mb-xlarge {
        margin-bottom: 18rem;
    }

    @media (max-width: 1023px) {
        .pt-small {
            padding-top: 3rem;
        }
        .pt-medium {
            padding-top: 6rem;
        }
        .pt-large {
            padding-top: 7.5rem;
        }
        .pt-xlarge {
            padding-top: 9rem;
        }

        .pb-small {
            padding-bottom: 3rem;
        }
        .pb-medium {
            padding-bottom: 6rem;
        }
        .pb-large {
            padding-bottom: 7.5rem;
        }
        .pb-xlarge {
            padding-bottom: 9rem;
        }

        .mt-small {
            margin-top: 3rem;
        }
        .mt-medium {
            margin-top: 6rem;
        }
        .mt-large {
            margin-top: 7.5rem;
        }
        .mt-xlarge {
            margin-top: 9rem;
        }

        .mb-small {
            margin-bottom: 3rem;
        }
        .mb-medium {
            margin-bottom: 6rem;
        }
        .mb-large {
            margin-bottom: 7.5rem;
        }
        .mb-xlarge {
            margin-bottom: 9rem;
        }
    }
</style>
