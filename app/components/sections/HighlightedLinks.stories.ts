import type { Meta, StoryObj } from '@storybook/vue3';

import HighlightedLinks from './HighlightedLinks.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';
import getImagePath from '../../utils/getStorybookImagePath';

const meta: Meta<typeof HighlightedLinks> = {
    component: HighlightedLinks,
};

export default meta;
type Story = StoryObj<typeof HighlightedLinks>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args: any) => ({
        components: { HighlightedLinks, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><HighlightedLinks v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            imageLinks: [
                {
                    image: {
                        id: 0,
                        url: getImagePath('images/herbatio.jpg'),
                        alt: 'Herbatio',
                    },
                    link: {
                        href: '/',
                        text: 'Herbatio',
                    },
                },
                {
                    image: {
                        id: 0,
                        url: getImagePath('images/kraeutervitaltage.jpg'),
                        alt: 'Kräuter Vital Tage',
                    },
                    link: {
                        href: '/',
                        text: 'Kräuter Vital Tage',
                    },
                },
                {
                    image: {
                        id: 0,
                        url: getImagePath('images/knospe.png'),
                        alt: 'Knospe',
                    },
                    link: {
                        href: '/',
                        text: 'Knospe',
                    },
                },
            ],
        },
        settings: {
            spacing: {
                marginTop: 'large',
                marginBottom: 'large',
                paddingTop: 'large',
                paddingBottom: 'large',
            },
            highlightedLinksStyle: 'light',
        },
    },
};
