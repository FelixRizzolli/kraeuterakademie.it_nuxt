export default defineNuxtConfig({
    $meta: {
        name: 'public',
    },

    components: [
        { path: './components/elements', pathPrefix: false },
        { path: './components/layout', pathPrefix: false },
        { path: './components/sections', pathPrefix: false },
    ],
});
