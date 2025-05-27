import type { Meta, StoryObj } from '@storybook/vue3';

import Infos from './Infos.vue';

const meta: Meta<typeof Infos> = {
    component: Infos,
};

export default meta;
type Story = StoryObj<typeof Infos>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { Infos },
        setup() {
            return { args };
        },
        template: '<Infos v-bind="args" />',
    }),
    args: {
        data: {
            infos: [
                {
                    title: 'Lehrgangskosten € 270 + Mwst',
                    text: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Im Preis inbegriffen sind umfangreiche Unterlagen und Bestimmungshilfen',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Teilnehmerzahl ist begrenzt',
                    text: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Bei Fragen oder Infos: 338 269 8477 oder sigrid.thaler@gmail.com',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
                {
                    title: 'Referentin Sigrid Thaler',
                    text: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Referentin der FNL Kräuterakademie',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                },
            ],
            link: {
                href: '/kraeuterkurse',
                text: 'Zum Seminar anmelden',
            },
        },
    },
};
