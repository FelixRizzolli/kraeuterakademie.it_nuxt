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
  }
})
