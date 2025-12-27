export default (gsap: globalThis.GSAP) => {
    return (
        element: Ref<HTMLElement | undefined | null, HTMLElement | undefined | null>,
        showText: globalThis.Ref<boolean, boolean> | WritableComputedRef<boolean | undefined, boolean | undefined>,
        threshold: number = 0.5,
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
