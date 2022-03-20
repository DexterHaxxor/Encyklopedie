;(function () {
    "use strict"

    /** @type {Array<() => void>} */
    const cleanup = []
    /** @type {(this: MediaQueryList) => void} */
    const handler = function () {
        if (this.matches) {
            for (const menu of document.querySelectorAll("nav ul ul")) {
                const link = menu.previousElementSibling
                const handler = () => menu.classList.toggle("show")
                link.addEventListener("click", handler)
                cleanup.push(() => link.removeEventListener("click", handler))
            }
        } else {
            for (const f of cleanup) f()
            cleanup.length = 0

            for (const menu of document.querySelectorAll("nav ul ul")) {
                menu.classList.remove("show")
            }
        }
    }

    const media = window.matchMedia("(hover: none)")
    media.addEventListener("change", handler)
    handler.apply(media)
})()
