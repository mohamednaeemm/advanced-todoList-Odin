export function whichContainerIsOpen() {
    const containers = document.querySelectorAll('.container-right > div');

    const firstVisibleContainer = Array.from(containers).find(
        container => window.getComputedStyle(container).display === 'flex'
    );

    if (firstVisibleContainer) {
        return firstVisibleContainer;
    }
}