export default (gsap: globalThis.GSAP) => {
    return (element: globalThis.Ref<HTMLElement, HTMLElement>) => {
        gsap.set(element.value, { opacity: 0 });

        const observeElement = observe(
            element.value,
            () => {
                gsap.to(element.value, { opacity: 1, duration: 2, stagger: 0.2 });
                observeElement?.disconnect();
            },
            {
                threshold: 0,
                rootMargin: `-30% 0px -30% 0px`, // Triggers when element is in middle 30% of viewport
            },
        );
    };
};
