export default defineNuxtConfig({
    $meta: {
        name: 'public',
    },

    components: [
        { path: './components/elements', pathPrefix: false, global: false },
        { path: './components/layout', pathPrefix: false, global: false },
        { path: './components/sections', pathPrefix: false, global: false },
    ],
});
