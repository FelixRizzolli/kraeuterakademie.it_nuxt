import type { Meta, StoryObj } from '@storybook/vue3';

import CourseList from './CourseList.vue';
import StorybookStoryWrapper from './StorybookStoryWrapper.vue';

const meta: Meta<typeof CourseList> = {
    component: CourseList,
};

export default meta;
type Story = StoryObj<typeof CourseList>;

const k20: Course = {
    id: 20,
    name: 'K20',
    place: 'pustertal',
    status: 'running',
};
const k21: Course = {
    id: 21,
    name: 'K21',
    place: 'unterland',
    status: 'running',
};
const k22: Course = {
    id: 22,
    name: 'K22',
    place: 'unterland',
    status: 'running',
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
    render: (args) => ({
        components: { CourseList, StorybookStoryWrapper },
        setup() {
            return { args };
        },
        template: '<StorybookStoryWrapper><CourseList v-bind="args" /></StorybookStoryWrapper>',
    }),
    args: {
        data: {
            title: 'Aktuelle Kurse',
            courses: [
                {
                    name: 'Pustertal K20',
                    place: 'Pustertal',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Pustertal, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                    modules: {
                        hasNextPage: false,
                        hasPrevPage: false,
                        page: 1,
                        limit: 0,
                        pagingCounter: 0,
                        totalDocs: 0,
                        totalPages: 0,
                        docs: [
                            { id: 1, title: '2023-10-28', course: k20, date: '2023-10-28' },
                            { id: 2, title: '2023-11-11', course: k20, date: '2023-11-11' },
                            { id: 3, title: '2023-12-09', course: k20, date: '2023-12-09' },
                            { id: 4, title: '2024-01-20', course: k20, date: '2024-01-20' },
                            { id: 5, title: '2024-02-10', course: k20, date: '2024-02-10' },
                            { id: 6, title: '2024-03-23', course: k20, date: '2024-03-23' },
                            { id: 7, title: '2024-04-27', course: k20, date: '2024-04-27' },
                            { id: 8, title: '2024-05-11', course: k20, date: '2024-05-11' },
                            { id: 9, title: '2024-06-08', course: k20, date: '2024-06-08' },
                            { id: 10, title: '2024-07-06', course: k20, date: '2024-07-06' },
                            { id: 11, title: '2024-08-03', course: k20, date: '2024-08-03' },
                            { id: 12, title: '2024-08-31', course: k20, date: '2024-08-31' },
                            { id: 13, title: '2024-09-14', course: k20, date: '2024-09-14' },
                            { id: 14, title: '2024-09-28', course: k20, date: '2024-09-28' },
                            { id: 15, title: '2024-10-12', course: k20, date: '2024-10-12' },
                            { id: 16, title: '2024-11-09', course: k20, date: '2024-11-09' },
                            { id: 17, title: '2024-11-23', course: k20, date: '2024-11-23' },
                            { id: 18, title: '2024-12-07', course: k20, date: '2024-12-07' },
                            { id: 19, title: '2025-01-18', course: k20, date: '2025-01-18' },
                            { id: 20, title: '2025-02-08', course: k20, date: '2025-02-08' },
                            { id: 21, title: '2025-02-22', course: k20, date: '2025-02-22' },
                            { id: 22, title: '2025-03-15', course: k20, date: '2025-03-15' },
                            { id: 23, title: '2025-03-23', course: k20, date: '2025-03-23' },
                            { id: 24, title: '2025-04-12', course: k20, date: '2025-04-12' },
                            { id: 25, title: '2025-04-26', course: k20, date: '2025-04-26' },
                            { id: 26, title: '2025-05-10', course: k20, date: '2025-05-10' },
                            { id: 27, title: '2025-05-24', course: k20, date: '2025-05-24' },
                            { id: 28, title: '2025-06-28', course: k20, date: '2025-06-28' },
                            { id: 29, title: '2025-06-29', course: k20, date: '2025-06-29' },
                            { id: 30, title: '2025-07-12', course: k20, date: '2025-07-12' },
                            { id: 31, title: '2025-08-09', course: k20, date: '2025-08-09' },
                            { id: 32, title: '2025-08-16', course: k20, date: '2025-08-16' },
                            { id: 33, title: '2025-08-17', course: k20, date: '2025-08-17' },
                            { id: 34, title: '2024-07-09', course: k20, date: '2024-07-09' },
                            { id: 35, title: '2024-07-10', course: k20, date: '2024-07-10' },
                            { id: 36, title: '2024-07-13', course: k20, date: '2024-07-13' },
                            { id: 37, title: '2024-07-14', course: k20, date: '2024-07-14' },
                        ],
                    },
                },
                {
                    name: 'Unterland K21',
                    place: 'Unterland',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                    modules: {
                        hasNextPage: false,
                        hasPrevPage: false,
                        page: 1,
                        limit: 0,
                        pagingCounter: 0,
                        totalDocs: 0,
                        totalPages: 0,
                        docs: [
                            { id: 1, title: '2023-10-24', course: k21, date: '2023-10-24' },
                            { id: 2, title: '2023-11-21', course: k21, date: '2023-11-21' },
                            { id: 3, title: '2023-12-12', course: k21, date: '2023-12-12' },
                            { id: 4, title: '2024-01-23', course: k21, date: '2024-01-23' },
                            { id: 5, title: '2024-02-13', course: k21, date: '2024-02-13' },
                            { id: 6, title: '2024-03-26', course: k21, date: '2024-03-26' },
                            { id: 7, title: '2024-04-30', course: k21, date: '2024-04-30' },
                            { id: 8, title: '2024-05-14', course: k21, date: '2024-05-14' },
                            { id: 9, title: '2024-06-11', course: k21, date: '2024-06-11' },
                            { id: 10, title: '2024-07-09', course: k21, date: '2024-07-09' },
                            { id: 11, title: '2024-08-06', course: k21, date: '2024-08-06' },
                            { id: 12, title: '2024-09-03', course: k21, date: '2024-09-03' },
                            { id: 13, title: '2024-09-17', course: k21, date: '2024-09-17' },
                            { id: 14, title: '2024-10-01', course: k21, date: '2024-10-01' },
                            { id: 15, title: '2024-10-15', course: k21, date: '2024-10-15' },
                            { id: 16, title: '2024-11-12', course: k21, date: '2024-11-12' },
                            { id: 17, title: '2024-11-26', course: k21, date: '2024-11-26' },
                            { id: 18, title: '2024-12-10', course: k21, date: '2024-12-10' },
                            { id: 19, title: '2025-01-21', course: k21, date: '2025-01-21' },
                            { id: 20, title: '2025-02-11', course: k21, date: '2025-02-11' },
                            { id: 21, title: '2025-02-23', course: k21, date: '2025-02-23' },
                            { id: 22, title: '2025-03-16', course: k21, date: '2025-03-16' },
                            { id: 23, title: '2025-04-08', course: k21, date: '2025-04-08' },
                            { id: 24, title: '2025-04-29', course: k21, date: '2025-04-29' },
                            { id: 25, title: '2025-05-13', course: k21, date: '2025-05-13' },
                            { id: 26, title: '2025-05-27', course: k21, date: '2025-05-27' },
                            { id: 27, title: '2025-06-17', course: k21, date: '2025-06-17' },
                            { id: 28, title: '2025-07-01', course: k21, date: '2025-07-01' },
                            { id: 29, title: '2025-07-15', course: k21, date: '2025-07-15' },
                            { id: 30, title: '2025-08-06', course: k21, date: '2025-08-06' },
                            { id: 31, title: '2025-08-12', course: k21, date: '2025-08-12' },
                            { id: 32, title: '2025-08-16', course: k21, date: '2025-08-16' },
                            { id: 33, title: '2025-08-17', course: k21, date: '2025-08-17' },
                            { id: 34, title: '2024-07-20', course: k21, date: '2024-07-20' },
                            { id: 35, title: '2024-07-21', course: k21, date: '2024-07-21' },
                            { id: 36, title: '2024-07-30', course: k21, date: '2024-07-30' },
                            { id: 37, title: '2024-07-31', course: k21, date: '2024-07-31' },
                        ],
                    },
                },
                {
                    name: 'Unterland K22',
                    place: 'Unterland',
                    description: {
                        root: {
                            type: 'root',
                            children: [
                                {
                                    type: 'paragraph',
                                    children: [
                                        {
                                            type: 'text',
                                            text: 'Der Kurs findet von Oktober 2023 bis August 2025 im Unterland, statt. Die Kurstage sind jeweils samstags und dauern von 9:00 bis 17:00 Uhr.',
                                            format: 0,
                                            version: 1,
                                        },
                                    ],
                                    version: 1,
                                },
                            ],
                            direction: 'ltr',
                            format: '',
                            indent: 0,
                            version: 1,
                        },
                    },
                    modules: {
                        hasNextPage: false,
                        hasPrevPage: false,
                        page: 1,
                        limit: 0,
                        pagingCounter: 0,
                        totalDocs: 0,
                        totalPages: 0,
                        docs: [
                            { id: 1, title: '2023-10-29', course: k22, date: '2023-10-29' },
                            { id: 2, title: '2023-11-19', course: k22, date: '2023-11-19' },
                            { id: 3, title: '2023-12-10', course: k22, date: '2023-12-10' },
                            { id: 4, title: '2024-01-21', course: k22, date: '2024-01-21' },
                            { id: 5, title: '2024-02-11', course: k22, date: '2024-02-11' },
                            { id: 6, title: '2024-03-03', course: k22, date: '2024-03-03' },
                            { id: 7, title: '2024-04-28', course: k22, date: '2024-04-28' },
                            { id: 8, title: '2024-05-19', course: k22, date: '2024-05-19' },
                            { id: 9, title: '2024-06-09', course: k22, date: '2024-06-09' },
                            { id: 10, title: '2024-07-07', course: k22, date: '2024-07-07' },
                            { id: 11, title: '2024-08-04', course: k22, date: '2024-08-04' },
                            { id: 12, title: '2024-09-01', course: k22, date: '2024-09-01' },
                            { id: 13, title: '2024-09-15', course: k22, date: '2024-09-15' },
                            { id: 14, title: '2024-10-13', course: k22, date: '2024-10-13' },
                            { id: 15, title: '2024-10-27', course: k22, date: '2024-10-27' },
                            { id: 16, title: '2024-11-10', course: k22, date: '2024-11-10' },
                            { id: 17, title: '2024-11-24', course: k22, date: '2024-11-24' },
                            { id: 18, title: '2024-12-08', course: k22, date: '2024-12-08' },
                            { id: 19, title: '2025-01-19', course: k22, date: '2025-01-19' },
                            { id: 20, title: '2025-02-09', course: k22, date: '2025-02-09' },
                            { id: 21, title: '2025-02-23', course: k22, date: '2025-02-23' },
                            { id: 22, title: '2025-03-16', course: k22, date: '2025-03-16' },
                            { id: 23, title: '2025-04-13', course: k22, date: '2025-04-13' },
                            { id: 24, title: '2025-04-27', course: k22, date: '2025-04-27' },
                            { id: 25, title: '2025-05-18', course: k22, date: '2025-05-18' },
                            { id: 26, title: '2025-06-01', course: k22, date: '2025-06-01' },
                            { id: 27, title: '2025-06-15', course: k22, date: '2025-06-15' },
                            { id: 28, title: '2025-07-06', course: k22, date: '2025-07-06' },
                            { id: 29, title: '2025-07-20', course: k22, date: '2025-07-20' },
                            { id: 30, title: '2025-08-03', course: k22, date: '2025-08-03' },
                            { id: 31, title: '2025-08-10', course: k22, date: '2025-08-10' },
                            { id: 32, title: '2025-08-16', course: k22, date: '2025-08-16' },
                            { id: 33, title: '2025-08-17', course: k22, date: '2025-08-17' },
                            { id: 34, title: '2024-07-20', course: k22, date: '2024-07-20' },
                            { id: 35, title: '2024-07-21', course: k22, date: '2024-07-21' },
                            { id: 36, title: '2024-07-30', course: k22, date: '2024-07-30' },
                            { id: 37, title: '2024-07-31', course: k22, date: '2024-07-31' },
                        ],
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
            style: 'light',
        },
    },
};
