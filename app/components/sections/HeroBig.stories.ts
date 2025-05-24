import type { Meta, StoryObj } from '@storybook/vue3';

import HeroBig from './HeroBig.vue';

const meta: Meta<typeof HeroBig> = {
    component: HeroBig,
};

export default meta;
type Story = StoryObj<typeof HeroBig>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { HeroBig },
        setup() {
            return { args };
        },
        template: '<HeroBig v-bind="args" />',
    }),
    args: {
        data: {
            title: 'Aufbaulehrgang Knospenexpert*in',
            image: {
                url: '/images/herobig_1.png',
                alternativeText: 'Kräuterkurs Bild',
            },
        },
    },
};
