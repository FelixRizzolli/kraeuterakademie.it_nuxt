import type { Meta, StoryObj } from '@storybook/vue3';

import TextElement from './TextElement.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof TextElement> = {
    component: TextElement,
};

export default meta;
type Story = StoryObj<typeof TextElement>;

const getImagePath = (imagePath: string): string => {
    if (process.env.NODE_ENV === 'production') {
        return imagePath;
    }
    return `http://localhost:3000${imagePath}`;
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { TextElement, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><TextElement v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Titel zu Zertifikat und Datum',
            content: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            text: 'Das Zertifikat zur/m Knospenexpert*in erhält man nach der Prüfung, bei der man das Gelernte präsentieren kann.',
                            type: 'text',
                        },
                    ],
                },
                {
                    type: 'paragraph',
                    children: [
                        {
                            text: 'Der dreitägige Lehrgang wird in Südtirol 2025 zweimal angeboten, und die Uhrzeiten sind jeweils von 8.30 bis 17.30 Uhr:',
                            type: 'text',
                        },
                    ],
                },
                {
                    type: 'list',
                    format: 'unordered',
                    children: [
                        {
                            type: 'list-item',
                            children: [
                                {
                                    text: 'Freitag: 28. Februar, 07. März, 21. März bei Bergila',
                                    type: 'text',
                                },
                            ],
                        },
                        {
                            type: 'list-item',
                            children: [
                                {
                                    text: 'Samstag: 01. März, 08. März, 22. März in Montan',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'none',
                paddingBottom: 'none',
            },
            textElementStyle: 'light',
        },
    },
};
