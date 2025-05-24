import type { Meta, StoryObj } from '@storybook/vue3';

import MoodPicture from './MoodPicture.vue';

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
        components: { MoodPicture },
        setup() {
            return { args };
        },
        template: '<MoodPicture v-bind="args" />',
    }),
    args: {
        data: {
            image: {
                url: '/images/herobig_2.png',
                alternativeText: 'Kräuterkurs Bild',
            },
        },
    },
};
