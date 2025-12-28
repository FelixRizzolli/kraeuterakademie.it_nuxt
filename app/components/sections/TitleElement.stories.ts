import type { Meta, StoryObj } from '@storybook/vue3';

import TitleElement from './TitleElement.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof TitleElement> = {
    component: TitleElement,
};

export default meta;
type Story = StoryObj<typeof TitleElement>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { TitleElement, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><TitleElement v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Titel der Seite',
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
