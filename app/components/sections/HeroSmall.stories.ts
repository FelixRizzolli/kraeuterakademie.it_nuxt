import type { Meta, StoryObj } from "@storybook/vue3";

import HeroSmall from "./HeroSmall.vue";

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
        components: { HeroSmall },
        setup() {
            return { args };
        },
        template: '<HeroSmall v-bind="args" />',
    }),
    args: {
        data: {
            title: "Kurse zu Wildpflanzen und Heilkräuter",
            image: {
                url: "/images/herosmall_2.png",
                alternativeText: "Kräuterakademie",
            },
            link: {
                href: "/kraeuterkurse",
                text: "Kräuterakademie",
            },
        },
    },
};
