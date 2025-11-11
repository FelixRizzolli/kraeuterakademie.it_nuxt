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
        data: {},
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
