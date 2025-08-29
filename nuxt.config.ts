// https://nuxt.com/docs/api/configuration/nuxt-config

import devtoolsJson from 'vite-plugin-devtools-json';
import graphqlLoader from 'vite-plugin-graphql-loader';

export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: '%s | Sigrid Thaler Rizzolli',
            htmlAttrs: {
                lang: 'de',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon_x16.ico' },
                { rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon_x32.ico' },
                { rel: 'icon', type: 'image/x-icon', sizes: '48x48', href: '/favicon_x48.ico' },
                { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon.png' },
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            ],
        },
    },

    runtimeConfig: {
        public: {
            strapiApiUrl: process.env.NODE_ENV === 'production' ? process.env.STRAPI_API_URL : 'http://localhost:1337',
        },
    },

    components: [
        { path: '~/components/elements', pathPrefix: false },
        { path: '~/components/layout', pathPrefix: false },
        { path: '~/components/sections', pathPrefix: false },
    ],

    compatibilityDate: '2025-08-29',
    devtools: { enabled: true },

    css: ['@/assets/styles/base.scss', '@/assets/styles/layout.scss', '@/assets/styles/grid-layout.scss'],

    plugins: ['~/plugins/pinia.ts'],

    modules: [
        '@nuxt/image',
        'nuxt-svgo',
        '@nuxtjs/storybook',
        '@nuxtjs/strapi',
        'nuxt-strapi-blocks-renderer',
        '@nuxtjs/seo',
        '@nuxtjs/device',
        'nuxt-swiper',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "~/assets/styles/colors.scss" as *;
                        @use "~/assets/styles/fonts.scss" as *;
                        @use "~/assets/styles/mixins.scss" as *;
                        @use "~/assets/styles/prefixer.scss" as *;
                    `,
                },
            },
        },
        optimizeDeps: {
            include: ['qs'],
        },
        plugins: [devtoolsJson(), graphqlLoader()],
    },

    nitro: {
        output: {
            dir: '.output',
        },
    },

    svgo: {
        // https://www.npmjs.com/package/nuxt-svgo
        componentPrefix: 'i',

        autoImportPath: '~/assets/icons/',

        customComponent: 'Icon',

        // if many icons, maybe set to false for better performance (currently generates chunks for each icon)
        // global: false,

        svgoConfig: {
            // optimization will be applied until the result differs from the one obtained in the previous step
            // multipass: true,

            plugins: [
                {
                    // default set of plugins, https://svgo.dev/docs/preset-default/#plugins-list
                    name: 'preset-default',
                    params: {
                        overrides: {
                            // viewbox is required for svg to scale properly
                            removeViewBox: false,

                            // disable mergePaths to preserve all paths
                            mergePaths: false,

                            // disable collapseGroups to preserve groups
                            collapseGroups: false,
                        },
                    },
                },
                // additional plugins, https://svgo.dev/docs/plugins/

                // remove width and height attributes,
                'removeDimensions',

                // remove xmlns attributes
                'removeXMLNS',
            ],
        },
    },

    strapi: {
        url: process.env.NODE_ENV === 'production' ? process.env.STRAPI_API_URL : 'http://localhost:1337',
        prefix: '/api',
        admin: '/admin',
        version: 'v5',
        cookie: {},
        cookieName: 'strapi_jwt',
    },
});
