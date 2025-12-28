import type { Meta, StoryObj } from '@storybook/vue3';

import SwiperCard from './SwiperCard.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof SwiperCard> = {
    component: SwiperCard,
};

export default meta;
type Story = StoryObj<typeof SwiperCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { SwiperCard, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><SwiperCard v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Aktuelle Kurse',
            cards: [
                {
                    image: {
                        id: 1,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Kräuterkurs',
                    },
                    info: 'Knospen',
                    date: '2025-03-15',
                    title: 'Knospenexperte werden',
                    link: {
                        href: '/kraeuterkurse',
                        text: 'Zum Kurs',
                    },
                },
                {
                    image: {
                        id: 2,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Wildkräuterkurs',
                    },
                    info: 'Wildkräuter',
                    date: '2025-04-20',
                    title: 'Wildkräuter Basiskurs',
                    link: {
                        href: '/kraeuterkurse',
                        text: 'Zum Kurs',
                    },
                },
                {
                    image: {
                        id: 3,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Heilpflanzenkurs',
                    },
                    info: 'Heilpflanzen',
                    date: '2025-05-10',
                    title: 'Heilpflanzen Intensivkurs',
                    link: {
                        href: '/kraeuterkurse',
                        text: 'Zum Kurs',
                    },
                },
                {
                    image: {
                        id: 4,
                        url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                        alt: 'Teemischungen',
                    },
                    info: 'Teekunde',
                    date: '2025-06-05',
                    title: 'Teemischungen selbst herstellen',
                    link: {
                        href: '/kraeuterkurse',
                        text: 'Zum Kurs',
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
            swiperCardStyle: 'light',
        },
    },
};
