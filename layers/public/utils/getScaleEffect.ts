import type { Ref, WritableComputedRef } from 'vue';

export default (_gsap: globalThis.GSAP) => {
    return (
        element: Ref<HTMLElement | undefined | null>,
        showText: Ref<boolean | undefined> | WritableComputedRef<boolean | undefined>,
        _threshold: number = 0.5,
    ) => {
        if (!element.value) return;

        const observeElement = observe(
            element.value,
            () => {
                showText.value = true;
                observeElement?.disconnect();
            },
            {
                threshold: 0,
                rootMargin: `-30% 0px -30% 0px`, // Triggers when element is in middle 30% of viewport
            },
        );
    };
};
