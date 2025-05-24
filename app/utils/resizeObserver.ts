export default (element: HTMLElement, callback: () => void): ResizeObserver | undefined => {
    if (!element) {
        console.error('Element is null:');
        return;
    }

    const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        entries.forEach((entry: ResizeObserverEntry) => {
            // Call the callback function when the observed element is resized
            callback();
            if (!document.contains(element)) {
                // Stop observing the element when it is removed from the DOM
                resizeObserver.disconnect();
            }
        });
    });

    resizeObserver.observe(element);

    return resizeObserver;
};
