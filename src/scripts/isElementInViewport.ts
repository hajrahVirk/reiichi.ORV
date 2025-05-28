export function isElementInViewport(query: string) {
    const el = document.querySelector(query);
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].intersectionRatio <= 0) el?.classList.add("block")
        else el?.classList.add("hidden");
    });
    observer.observe(el as Element);
    // const rect = el?.getBoundingClientRect() as DOMRect;

    // return (
    //     rect.top >= 0 &&
    //     rect?.left &&
    //     rect?.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
}