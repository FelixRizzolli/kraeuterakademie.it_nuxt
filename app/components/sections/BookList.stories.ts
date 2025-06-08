import type { Meta, StoryObj } from '@storybook/vue3';

import BookList from './BookList.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof BookList> = {
    component: BookList,
};

export default meta;
type Story = StoryObj<typeof BookList>;

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
    render: (args: any) => ({
        components: { BookList, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><BookList v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Hier ein Titel zu den Büchern',
            books: [
                {
                    image: {
                        alternativeText: null,
                        url: getImagePath('/images/mein_kraeuterbuechlein.png'),
                    },
                    infos: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'ISBN: 000000000000000000000\nErhältlich in: DE  .  IT',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    title: 'Die Zirbe',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Schon seit vielen Jahrhunderten schätzen die Menschen die Zirbe, dieser Baum wird daher auch Königin der Alpen genannt. Dieses Buch gibt nicht nur Aufschluss über den Lebensraum der Zirbe, altes Volkswissen, wissenschaftliche Forschungsergebnisse über die Vorzüge seines Holzes, sondern enthält auch viele Tipps, wie die Zirbe im Wohnbereich - insbesondere zum Thema gesunder Schlaf - und in der Naturkosmetik verwendet werden kann. Hier finden Sie auch raffinierte Rezepte für die Hausapotheke bis hin zur Küche..',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    link: {
                        href: '/',
                        text: 'Jetzt Kaufen',
                        target: null,
                    },
                },
                {
                    image: {
                        alternativeText: null,
                        url: getImagePath('/images/die_zirbe.png'),
                    },
                    infos: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'ISBN: 000000000000000000000\nErhältlich in: DE  .  IT',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    title: 'Mein Kräuterbüchlein',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Mein Kräuterbüchlein von Sigrid Thaler (Biologin) bietet ausführliche Informationen zu Geschichte, Inhaltsstoffen und Anwendung von Heilkräutern. Das beliebte Büchlein ist überall im Fachhandel erhältlich, auch in italienischer Sprache.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    link: {
                        href: '/',
                        text: 'Jetzt Kaufen',
                        target: null,
                    },
                },
                {
                    image: {
                        alternativeText: null,
                        url: getImagePath('/images/mein_kraeuterbuechlein.png'),
                    },
                    infos: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'ISBN: 000000000000000000000\nErhältlich in: DE  .  IT',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    title: 'Ein weiteres buch',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Mein Kräuterbüchlein von Sigrid Thaler (Biologin) bietet ausführliche Informationen zu Geschichte, Inhaltsstoffen und Anwendung von Heilkräutern. Das beliebte Büchlein ist überall im Fachhandel erhältlich, auch in italienischer Sprache.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    link: {
                        href: '/',
                        text: 'Jetzt Kaufen',
                        target: null,
                    },
                },
                {
                    image: {
                        alternativeText: null,
                        url: getImagePath('/images/die_zirbe.png'),
                    },
                    infos: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'ISBN: 000000000000000000000\nErhältlich in: DE  .  IT',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    title: 'Platzhalter Buch',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Mein Kräuterbüchlein von Sigrid Thaler (Biologin) bietet ausführliche Informationen zu Geschichte, Inhaltsstoffen und Anwendung von Heilkräutern. Das beliebte Büchlein ist überall im Fachhandel erhältlich, auch in italienischer Sprache.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    link: {
                        href: '/',
                        text: 'Jetzt Kaufen',
                        target: null,
                    },
                },
            ],
        },
        settings: {
            spacing: {
                marginTop: 'none',
                marginBottom: 'large',
                paddingTop: 'large',
                paddingBottom: 'large',
            },
            bookListStyle: 'dark',
        },
    },
};
