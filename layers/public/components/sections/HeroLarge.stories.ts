import type { Meta, StoryObj } from '@storybook/vue3';

import HeroLarge from './HeroLarge.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

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
        components: { HeroLarge, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><HeroLarge v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Aufbaulehrgang Knospenexpert*in',
            image: {
                id: 0,
                url: getImagePath('/images/knospe.png'),
                alt: 'Kräuterkurs Bild',
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
