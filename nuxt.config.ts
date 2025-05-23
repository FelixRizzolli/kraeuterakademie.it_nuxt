// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: "%s | Sigrid Thaler Rizzolli",
            htmlAttrs: {
                lang: "de",
            },
        }
    },

    runtimeConfig: {
        public: {
            strapiApiUrl: process.env.NODE_ENV === "production" ? process.env.STRAPI_API_URL : "http://localhost:1337",
        },
    },

    components: [
        { path: "~/components/elements", pathPrefix: false },
        { path: "~/components/layout", pathPrefix: false },
        { path: "~/components/sections", pathPrefix: false },
    ],

    future: {
        compatibilityVersion: 4,
    },

    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    css: ["@/assets/styles/base.scss", "@/assets/styles/layout.scss", "@/assets/styles/grid-layout.scss"],

    plugins: ["~/plugins/pinia.ts"],

    modules: ["@nuxt/image", "nuxt-svgo", "@nuxtjs/storybook", "@nuxtjs/strapi", "nuxt-strapi-blocks-renderer", "@nuxtjs/seo"],

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
            include: ["qs"],
        },
    },

    nitro: {
        output: {
            dir: ".output",
        },
    },

    svgo: {
        // https://www.npmjs.com/package/nuxt-svgo
        componentPrefix: "i",

        autoImportPath: "~/assets/icons/",

        customComponent: "Icon",

        // if many icons, maybe set to false for better performance (currently generates chunks for each icon)
        // global: false,

        svgoConfig: {
            // optimization will be applied until the result differs from the one obtained in the previous step
            // multipass: true,

            plugins: [
                {
                    // default set of plugins, https://svgo.dev/docs/preset-default/#plugins-list
                    name: "preset-default",
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
                "removeDimensions",

                // remove xmlns attributes
                "removeXMLNS",
            ],
        },
    },

    strapi: {
        url: process.env.NODE_ENV === "production" ? process.env.STRAPI_API_URL : "http://localhost:1337",
        prefix: "/api",
        admin: "/admin",
        version: "v5",
        cookie: {},
        cookieName: "strapi_jwt",
    },
});
