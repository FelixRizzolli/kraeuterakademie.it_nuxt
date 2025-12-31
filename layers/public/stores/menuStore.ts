import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
    state: () => ({
        isOpen: false,
    }),
    actions: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },
        openMenu() {
            this.isOpen = true;
        },
    },
});
