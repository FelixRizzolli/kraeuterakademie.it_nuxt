import type { Meta, StoryObj } from '@storybook/vue3';

import HeroSmall from './HeroSmall.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof HeroSmall> = {
    component: HeroSmall,
};

export default meta;
type Story = StoryObj<typeof HeroSmall>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { HeroSmall, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><HeroSmall v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Kurse zu Wildpflanzen und Heilkräuter',
            image: {
                id: 0,
                url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                alt: 'Kräuterakademie',
            },
            link: {
                href: '/kraeuterkurse',
                text: 'Kräuterakademie',
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
