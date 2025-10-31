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
        data: {},
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'none',
                paddingBottom: 'none',
            },
            swiperLargeStyle: 'light',
        },
    },
};
