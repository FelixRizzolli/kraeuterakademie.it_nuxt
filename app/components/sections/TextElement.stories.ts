import type { Meta, StoryObj } from "@storybook/vue3";

import TextElement from "./TextElement.vue";

const meta: Meta<typeof TextElement> = {
    component: TextElement,
};

export default meta;
type Story = StoryObj<typeof TextElement>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { TextElement },
        setup() {
            return { args };
        },
        template: '<TextElement v-bind="args" />',
    }),
    args: {
        data: {
            title: "Titel zu Zertifikat und Datum",
            content: String.raw`
                <p>
                    Das Zertifikat zur/m Knospenexpert*in erhält man nach der Prüfung, bei der man das Gelernte präsentieren kann.
                </p>
                <p>
                    Der dreitägige Lehrgang wird in Südtirol 2025 zweimal angeboten, und die Uhrzeiten sind jeweils von 8.30 bis 17.30 Uhr:
                </p>
                <ul>
                    <li>Freitag: 28. Februar, 07. März, 21. März bei Bergila</li>
                    <li>Samstag: 01. März, 08. März, 22. März in Montan</li>
                </ul>
            `,
        },
    },
};
