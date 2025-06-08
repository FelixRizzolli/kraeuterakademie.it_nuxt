import type { Meta, StoryObj } from '@storybook/vue3';

import MoodPicture from './MoodPicture.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof MoodPicture> = {
    component: MoodPicture,
};

export default meta;
type Story = StoryObj<typeof MoodPicture>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { MoodPicture, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><MoodPicture v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            image: {
                url: getImagePath('/images/knospe.png'),
                alternativeText: 'Kräuterkurs Bild',
            },
        },
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'none',
                paddingBottom: 'none',
            },
        },
    },
};
