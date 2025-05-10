// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [
    '@/assets/styles/base.scss',
    '@/assets/styles/layout.scss',
    '@/assets/styles/grid-layout.scss',
  ],

  modules: ['@nuxt/image', 'nuxt-svgo'],

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
        }
      }
    }
  },

  nitro: {
    output: {
      dir: '.output'
    }
  },

  svgo: {
      // https://www.npmjs.com/package/nuxt-svgo
      componentPrefix: "i",
      
      autoImportPath: "~/assets/icons/",

      customComponent: "KaIcon",

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
})