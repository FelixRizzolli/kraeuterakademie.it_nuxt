import type { Meta, StoryObj } from '@storybook/vue3';

import Infos from './Infos.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

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
        components: { Infos, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><Infos v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            infos: [
                {
                    title: 'Lehrgangskosten € 270 + Mwst',
                    text: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Im Preis inbegriffen sind umfangreiche Unterlagen und Bestimmungshilfen',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                },
                {
                    title: 'Teilnehmerzahl ist begrenzt',
                    text: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Bei Fragen oder Infos: 338 269 8477 oder sigrid.thaler@gmail.com',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                },
                {
                    title: 'Referentin Sigrid Thaler',
                    text: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Referentin der FNL Kräuterakademie',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                },
            ],
            link: {
                href: '/kraeuterkurse',
                text: 'Zum Seminar anmelden',
            },
        },
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'large',
                paddingBottom: 'large',
            },
            style: 'dark',
        },
    },
};
