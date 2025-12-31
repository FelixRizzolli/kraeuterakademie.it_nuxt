import type { Meta, StoryObj } from '@storybook/vue3';

import Accordions from './Accordions.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof Accordions> = {
    component: Accordions,
};

export default meta;
type Story = StoryObj<typeof Accordions>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { Accordions, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><Accordions v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Accordions',
            items: [
                {
                    title: 'Accordion 1',
                    content: {
                        root: {
                            type: 'root',
                            version: 1,
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            children: [
                                {
                                    type: 'paragraph',
                                    version: 1,
                                    children: [
                                        {
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                            version: 1,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
                {
                    title: 'Accordion 2',
                    content: {
                        root: {
                            type: 'root',
                            version: 1,
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            children: [
                                {
                                    type: 'paragraph',
                                    version: 1,
                                    children: [
                                        {
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                            version: 1,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                },
                {
                    title: 'Accordion 3',
                    content: {
                        root: {
                            type: 'root',
                            version: 1,
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            children: [
                                {
                                    type: 'paragraph',
                                    version: 1,
                                    children: [
                                        {
                                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                            version: 1,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
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
            style: 'light',
        },
    },
};
