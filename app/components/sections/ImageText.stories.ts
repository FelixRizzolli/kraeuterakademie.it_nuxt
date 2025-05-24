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
    render: (args) => ({
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
                url: '/images/imgtext_2.png',
                alternativeText: 'Kräuterakademie',
            },
            text1: 'Ich bin ein kleiner Blindtext. Und zwar schon so lange ich denken kann. Es war nicht leicht zu verstehen, was es bedeutet, ein blinder Text zu sein: Man ergibt keinen Sinn. Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
            infos: 'In den kleinsten Dingen zeigt die Natur ihre größten Wunder.',
            text2: 'Wirklich keinen Sinn. Man wird zusammenhangslos eingeschoben und rumgedreht - und oftmals gar nicht erst gelesen. Aber bin ich allein deshalb ein schlechterer Text als andere? Na gut, ich werde nie in den Bestsellerlisten stehen.',
            link: {
                href: '/kraeuterkurse',
                text: 'Kräuterakademie',
            },
        },
    },
};
