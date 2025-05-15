import type { Meta, StoryObj } from "@storybook/vue3";

import Infos from "./Infos.vue";

const meta: Meta<typeof Infos> = {
    component: Infos,
};

export default meta;
type Story = StoryObj<typeof Infos>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { Infos },
        setup() {
            return { args };
        },
        template: '<Infos v-bind="args" />',
    }),
    args: {
        data: {
            infos: [
                {
                    title: "Lehrgangskosten € 270 + Mwst",
                    text: "Im Preis inbegriffen sind umfangreiche Unterlagen und Bestimmungshilfen",
                },
                {
                    title: "Teilnehmerzahl ist begrenzt",
                    text: "Bei Fragen oder Infos: 338 269 8477 oder sigrid.thaler@gmail.com",
                },
                {
                    title: "Referentin Sigrid Thaler",
                    text: "Referentin der FNL Kräuterakademie",
                },
            ],
            link: {
                href: "/kraeuterkurse",
                text: "Zum Seminar anmelden",
            },
        },
    },
};
