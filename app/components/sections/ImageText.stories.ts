import type { Meta, StoryObj } from '@storybook/vue3';

import ImageText from './ImageText.vue';

const meta: Meta<typeof ImageText> = {
    component: ImageText,
};

export default meta;
type Story = StoryObj<typeof ImageText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { ImageText },
        setup() {
            return { args };
        },
        template: '<ImageText v-bind="args" />',
    }),
    args: {
        data: {
            title: 'Hier ein passender Titel zum Thema Kräuter und Kurse',
            image: {
                url: '/images/sigrid/sigrid_thaler_rizzolli_01.png',
                alternativeText: 'Kräuterakademie',
            },
            textTop: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            text: 'Ich bin ein kleiner ',
                            type: 'text',
                        },
                        {
                            text: 'Blindtext',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: '. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein ',
                            type: 'text',
                        },
                        {
                            text: 'blinder Text',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: ' zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird ',
                            type: 'text',
                        },
                        {
                            text: 'zusammenhangslos',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: ' eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein ',
                            type: 'text',
                        },
                        {
                            text: 'schlechterer Text',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: ' als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
                            type: 'text',
                        },
                    ],
                },
            ],
            textHighlight: 'In den kleinsten Dingen zeigt die Natur ihre größten Wunder.',
            textBottom: [
                {
                    type: 'paragraph',
                    children: [
                        {
                            text: 'Wirklich keinen Sinn. Man wird ',
                            type: 'text',
                        },
                        {
                            text: 'zusammenhangslos',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: ' eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein ',
                            type: 'text',
                        },
                        {
                            text: 'schlechterer Text',
                            type: 'text',
                            bold: true,
                        },
                        {
                            text: ' als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
                            type: 'text',
                        },
                    ],
                },
            ],
            link: {
                href: '/kraeuterkurse',
                text: 'Kräuterakademie',
            },
        },
    },
};
