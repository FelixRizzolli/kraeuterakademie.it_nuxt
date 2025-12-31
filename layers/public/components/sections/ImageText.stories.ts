import type { Meta, StoryObj } from '@storybook/vue3';

import ImageText from './ImageText.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

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
        components: { ImageText, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><ImageText v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Hier ein passender Titel zum Thema Kräuter und Kurse',
            image: {
                id: 0,
                url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                alt: 'Kräuterakademie',
            },
            textTop: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Ich bin ein kleiner ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'Blindtext',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: '. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'blinder Text',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: ' zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'zusammenhangslos',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: ' eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'schlechterer Text',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: ' als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
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
            textHighlight: 'In den kleinsten Dingen zeigt die Natur ihre größten Wunder.',
            textBottom: {
                root: {
                    type: 'root',
                    children: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    type: 'text',
                                    text: 'Wirklich keinen Sinn. Man wird ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'zusammenhangslos',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: ' eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein ',
                                    format: 0,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: 'schlechterer Text',
                                    format: 1,
                                    version: 1,
                                },
                                {
                                    type: 'text',
                                    text: ' als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
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
            link: {
                href: '/kraeuterkurse',
                text: 'Kräuterakademie',
            },
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
