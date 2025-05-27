import type { Meta, StoryObj } from '@storybook/vue3';

import HeroLarge from './HeroLarge.vue';

const meta: Meta<typeof HeroLarge> = {
    component: HeroLarge,
};

export default meta;
type Story = StoryObj<typeof HeroLarge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { HeroLarge },
        setup() {
            return { args };
        },
        template: '<HeroLarge v-bind="args" />',
    }),
    args: {
        data: {
            title: 'Aufbaulehrgang Knospenexpert*in',
            image: {
                url: '/images/knospe.png',
                alternativeText: 'Kräuterkurs Bild',
            },
        },
    },
};
