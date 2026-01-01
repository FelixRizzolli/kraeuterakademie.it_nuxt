import type { Config } from 'tailwindcss';

export default {
    important: '.dashboard-root',

    content: [
        './layers/dashboard/pages/**/*.{vue,ts}',
        './layers/dashboard/components/**/*.{vue,ts}',
        './layers/dashboard/layouts/**/*.{vue,ts}',
    ],

    corePlugins: {
        preflight: false,
    },
} satisfies Config;
