import type { StorybookConfig } from '@storybook-vue/nuxt';

const config: StorybookConfig = {
    stories: ['../app/components/**/*.mdx', '../app/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    addons: ['@chromatic-com/storybook', '@storybook/addon-vitest', '@storybook/addon-docs'],
    framework: {
        name: '@storybook-vue/nuxt',
        options: {},
    },
    staticDirs: ['../public'],
};
export default config;
