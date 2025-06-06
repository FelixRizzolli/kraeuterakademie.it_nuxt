import type { Meta, StoryObj } from '@storybook/vue3';

import CourseList from './CourseList.vue';

const meta: Meta<typeof CourseList> = {
    component: CourseList,
};

export default meta;
type Story = StoryObj<typeof CourseList>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { CourseList },
        setup() {
            return { args };
        },
        template: '<CourseList v-bind="args" />',
    }),
    args: {
        data: {
            title: 'Aktuelle Kurse',
            courses: [
                {
                    title: 'Pustertal K20',
                    place: 'Pustertal',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Pustertal, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    dates: [
                        { id: 0, date: '2023-10-28' },
                        { id: 0, date: '2023-11-11' },
                        { id: 0, date: '2023-12-09' },
                        { id: 0, date: '2024-01-20' },
                        { id: 0, date: '2024-02-10' },
                        { id: 0, date: '2024-03-23' },
                        { id: 0, date: '2024-04-27' },
                        { id: 0, date: '2024-05-11' },
                        { id: 0, date: '2024-06-08' },
                        { id: 0, date: '2024-07-06' },
                        { id: 0, date: '2024-08-03' },
                        { id: 0, date: '2024-08-31' },
                        { id: 0, date: '2024-09-14' },
                        { id: 0, date: '2024-09-28' },
                        { id: 0, date: '2024-10-12' },
                        { id: 0, date: '2024-11-09' },
                        { id: 0, date: '2024-11-23' },
                        { id: 0, date: '2024-12-07' },
                        { id: 0, date: '2025-01-18' },
                        { id: 0, date: '2025-02-08' },
                        { id: 0, date: '2025-02-22' },
                        { id: 0, date: '2025-03-15' },
                        { id: 0, date: '2025-03-23' },
                        { id: 0, date: '2025-04-12' },
                        { id: 0, date: '2025-04-26' },
                        { id: 0, date: '2025-05-10' },
                        { id: 0, date: '2025-05-24' },
                        { id: 0, date: '2025-06-28' },
                        { id: 0, date: '2025-06-29' },
                        { id: 0, date: '2025-07-12' },
                        { id: 0, date: '2025-08-09' },
                        { id: 0, date: '2025-08-16' },
                        { id: 0, date: '2025-08-17' },
                        { id: 0, date: '2024-07-09' },
                        { id: 0, date: '2024-07-10' },
                        { id: 0, date: '2024-07-13' },
                        { id: 0, date: '2024-07-14' },
                    ],
                },
                {
                    title: 'Unterland K21',
                    place: 'Unterland',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    dates: [
                        { id: 0, date: '2023-10-24' },
                        { id: 0, date: '2023-11-21' },
                        { id: 0, date: '2023-12-12' },
                        { id: 0, date: '2024-01-23' },
                        { id: 0, date: '2024-02-13' },
                        { id: 0, date: '2024-03-26' },
                        { id: 0, date: '2024-04-30' },
                        { id: 0, date: '2024-05-14' },
                        { id: 0, date: '2024-06-11' },
                        { id: 0, date: '2024-07-09' },
                        { id: 0, date: '2024-08-06' },
                        { id: 0, date: '2024-09-03' },
                        { id: 0, date: '2024-09-17' },
                        { id: 0, date: '2024-10-01' },
                        { id: 0, date: '2024-10-15' },
                        { id: 0, date: '2024-11-12' },
                        { id: 0, date: '2024-11-26' },
                        { id: 0, date: '2024-12-10' },
                        { id: 0, date: '2025-01-21' },
                        { id: 0, date: '2025-02-11' },
                        { id: 0, date: '2025-02-23' },
                        { id: 0, date: '2025-03-16' },
                        { id: 0, date: '2025-04-08' },
                        { id: 0, date: '2025-04-29' },
                        { id: 0, date: '2025-05-13' },
                        { id: 0, date: '2025-05-27' },
                        { id: 0, date: '2025-06-17' },
                        { id: 0, date: '2025-07-01' },
                        { id: 0, date: '2025-07-15' },
                        { id: 0, date: '2025-08-06' },
                        { id: 0, date: '2025-08-12' },
                        { id: 0, date: '2025-08-16' },
                        { id: 0, date: '2025-08-17' },
                        { id: 0, date: '2024-07-20' },
                        { id: 0, date: '2024-07-21' },
                        { id: 0, date: '2024-07-30' },
                        { id: 0, date: '2024-07-31' },
                    ],
                },
                {
                    title: 'Unterland K22',
                    place: 'Unterland',
                    description: [
                        {
                            type: 'paragraph',
                            children: [
                                {
                                    text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                    type: 'text',
                                },
                            ],
                        },
                    ],
                    dates: [
                        { id: 0, date: '2023-10-29' },
                        { id: 0, date: '2023-11-19' },
                        { id: 0, date: '2023-12-10' },
                        { id: 0, date: '2024-01-21' },
                        { id: 0, date: '2024-02-11' },
                        { id: 0, date: '2024-03-03' },
                        { id: 0, date: '2024-04-28' },
                        { id: 0, date: '2024-05-19' },
                        { id: 0, date: '2024-06-09' },
                        { id: 0, date: '2024-07-07' },
                        { id: 0, date: '2024-08-04' },
                        { id: 0, date: '2024-09-01' },
                        { id: 0, date: '2024-09-15' },
                        { id: 0, date: '2024-10-13' },
                        { id: 0, date: '2024-10-27' },
                        { id: 0, date: '2024-11-10' },
                        { id: 0, date: '2024-11-24' },
                        { id: 0, date: '2024-12-08' },
                        { id: 0, date: '2025-01-19' },
                        { id: 0, date: '2025-02-09' },
                        { id: 0, date: '2025-02-23' },
                        { id: 0, date: '2025-03-16' },
                        { id: 0, date: '2025-04-13' },
                        { id: 0, date: '2025-04-27' },
                        { id: 0, date: '2025-05-18' },
                        { id: 0, date: '2025-06-01' },
                        { id: 0, date: '2025-06-15' },
                        { id: 0, date: '2025-07-06' },
                        { id: 0, date: '2025-07-20' },
                        { id: 0, date: '2025-08-03' },
                        { id: 0, date: '2025-08-10' },
                        { id: 0, date: '2025-08-16' },
                        { id: 0, date: '2025-08-17' },
                        { id: 0, date: '2024-07-20' },
                        { id: 0, date: '2024-07-21' },
                        { id: 0, date: '2024-07-30' },
                        { id: 0, date: '2024-07-31' },
                    ],
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
            courseListStyle: 'light',
        },
    },
};
