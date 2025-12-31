import type { Meta, StoryObj } from '@storybook/vue3';

import AnimatedText from './AnimatedText.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof AnimatedText> = {
    component: AnimatedText,
};

export default meta;
type Story = StoryObj<typeof AnimatedText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { AnimatedText, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><AnimatedText v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'medium',
                paddingBottom: 'medium',
            },
            style: 'dark',
        },
    },
};
