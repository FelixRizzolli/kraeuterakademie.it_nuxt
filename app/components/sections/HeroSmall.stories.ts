import type { Meta, StoryObj } from '@storybook/vue3';

import HeroSmall from './HeroSmall.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof HeroSmall> = {
    component: HeroSmall,
};

export default meta;
type Story = StoryObj<typeof HeroSmall>;

const getImagePath = (imagePath: string): string => {
    if (process.env.NODE_ENV === 'production') {
        return imagePath;
    }
    return `http://localhost:3000${imagePath}`;
};

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
                url: getImagePath('/images/sigrid/sigrid_thaler_rizzolli_01.png'),
                alternativeText: 'Kräuterakademie',
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
