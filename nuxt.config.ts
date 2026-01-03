// https://nuxt.com/docs/api/configuration/nuxt-config

import devtoolsJson from 'vite-plugin-devtools-json';
import graphqlLoader from 'vite-plugin-graphql-loader';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    extends: ['./layers/shared', './layers/public', './layers/dashboard'],

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
            payloadApiUrl:
                process.env.NODE_ENV === 'production' ? process.env.PAYLOAD_API_URL : 'http://localhost:3001',
            siteUrl: process.env.SITE_URL || 'https://kraeuterakademie.it',
            siteName: process.env.SITE_NAME || 'Sigrid Thaler Rizzolli',
        },
    },

    compatibilityDate: '2025-08-29',
    devtools: { enabled: true },

    imports: {
        dirs: ['shared/types'],
    },

    modules: [
        '@pinia/nuxt',
        '@nuxt/image',
        'nuxt-svgo',
        ...(process.env.STORYBOOK === 'true' ? ['@nuxtjs/storybook'] : []),
        '@nuxtjs/seo',
        '@nuxtjs/device',
        'nuxt-swiper',
        'shadcn-nuxt',
        '@nuxtjs/i18n',
    ],

    i18n: {
        locales: [
            { code: 'en', language: 'en-US', file: 'en.json' },
            { code: 'de', language: 'de-DE', file: 'de.json' },
            { code: 'it', language: 'it-IT', file: 'it.json' },
        ],
        langDir: 'locales',
        defaultLocale: 'de',
        strategy: 'no_prefix',
        vueI18n: './i18n/i18n.config.ts',
    },

    vite: {
        optimizeDeps: {
            include: ['qs'],
            esbuildOptions: {
                target: 'esnext',
            },
        },
        plugins: [devtoolsJson(), graphqlLoader(), tailwindcss()],
        resolve: {
            alias: {
                qs: 'qs/lib/index.js',
            },
        },
    },

    nitro: {
        output: {
            dir: '.output',
        },
    },

    svgo: {
        // https://www.npmjs.com/package/nuxt-svgo
        componentPrefix: 'i',

        autoImportPath: '~~/layers/shared/assets/icons/',

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

    shadcn: {
        /**
         * Prefix for all the imported component.
         * @default "Ui"
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * Will respect the Nuxt aliases.
         * @link https://nuxt.com/docs/api/nuxt-config#alias
         * @default "@/components/ui"
         */
        componentDir: '~~/layers/dashboard/components/ui',
    },
});
