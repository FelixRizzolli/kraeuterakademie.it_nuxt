import type { Meta, StoryObj } from '@storybook/vue3';

import Accordions from './Accordions.vue';

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
    render: (args) => ({
        components: { Accordions },
        setup() {
            return { args };
        },
        template: '<Accordions v-bind="args" />',
    }),
    args: {
        data: {
            title: 'Accordions',
            accordions: [
                {
                    title: 'Accordion 1',
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
                                    type: 'text',
                                },
                                {
                                    text: 'elit',
                                    type: 'text',
                                    bold: true,
                                },
                                {
                                    text: '. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Accordion 2',
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
                                    type: 'text',
                                },
                                {
                                    text: 'elit',
                                    type: 'text',
                                    bold: true,
                                },
                                {
                                    text: '. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Accordion 3',
                    content: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
                                    type: 'text',
                                },
                                {
                                    text: 'elit',
                                    type: 'text',
                                    bold: true,
                                },
                                {
                                    text: '. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
};
