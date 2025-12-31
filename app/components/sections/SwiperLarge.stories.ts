import type { Meta, StoryObj } from '@storybook/vue3';

import SwiperLarge from './SwiperLarge.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof SwiperLarge> = {
    component: SwiperLarge,
};

export default meta;
type Story = StoryObj<typeof SwiperLarge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { SwiperLarge, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><SwiperLarge v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Kräuterwanderungen',
            items: [
                {
                    image: {
                        id: 1,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Kräuterwanderung',
                    },
                    infos: 'Frühling 2025',
                    title: 'Wildkräuter im Frühling',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Entdecken Sie die ersten Wildkräuter des Jahres auf einer geführten Wanderung durch die erwachende Natur.',
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
                    links: [
                        {
                            href: '/kraeuterkurse',
                            text: 'Mehr erfahren',
                        },
                    ],
                },
                {
                    image: {
                        id: 2,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Sommerkräuter',
                    },
                    infos: 'Sommer 2025',
                    title: 'Heilkräuter im Sommer',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Lernen Sie die vielfältigen Heilkräuter des Sommers kennen und ihre traditionelle Verwendung.',
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
                    links: [
                        {
                            href: '/kraeuterkurse',
                            text: 'Mehr erfahren',
                        },
                    ],
                },
                {
                    image: {
                        id: 3,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Herbstkräuter',
                    },
                    infos: 'Herbst 2025',
                    title: 'Wurzeln und Samen im Herbst',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Im Herbst sammeln wir Wurzeln und Samen für die Wintervorräte und lernen ihre Heilwirkung kennen.',
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
                    links: [
                        {
                            href: '/kraeuterkurse',
                            text: 'Mehr erfahren',
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
            style: 'light',
        },
    },
};
