export default (gsap: globalThis.GSAP) => {
    return (element: globalThis.Ref<HTMLElement, HTMLElement>, showText: globalThis.Ref<boolean, boolean>, threshold: number = 0.5) => {
        const observeElement = observe(
            element.value,
            () => {
                showText.value = true;
                observeElement?.disconnect();
            },
            {
                threshold,
            }
        );
    };
};
