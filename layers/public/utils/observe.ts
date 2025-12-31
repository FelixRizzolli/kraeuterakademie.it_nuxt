export default (element: HTMLElement, callback: () => void, options?: IntersectionObserverInit) => {
    const baseOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05,
    };
    const mergedOptions = { ...baseOptions, ...options };

    if (!element) {
        console.error('Element is null:');
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Call the callback function when the observed element intersects with the viewport
                callback();
            }
            if (!document.contains(element)) {
                // Stop observing the element when it is removed from the DOM
                observer.disconnect();
            }
        });
    }, mergedOptions);
    observer.observe(element);
    return observer;
};
