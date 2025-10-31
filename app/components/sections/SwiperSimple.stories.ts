import type { Meta, StoryObj } from '@storybook/vue3';

import SwiperSimple from './SwiperSimple.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof SwiperSimple> = {
    component: SwiperSimple,
};

export default meta;
type Story = StoryObj<typeof SwiperSimple>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { SwiperSimple, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><SwiperSimple v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Meine Gallerie',
            images: [
                {
                    alternativeText: "",
                    url: getImagePath('/images/knospe.png'),
                },
                {
                    alternativeText: "",
                    url: getImagePath('/images/knospe.png'),
                },
                {
                    alternativeText: "",
                    url: getImagePath('/images/knospe.png'),
                },
                {
                    alternativeText: "",
                    url: getImagePath('/images/knospe.png'),
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
            swiperSimpleStyle: 'light',
        },
    },
};
