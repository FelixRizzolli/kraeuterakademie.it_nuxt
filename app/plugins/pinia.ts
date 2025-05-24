import { createPinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
    console.log('Pinia plugin loaded'); // Debug log
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
});
