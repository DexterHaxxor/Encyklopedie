;(function () {
    "use strict"

    new Viewer(document.getElementById("content"), {
        toolbar: {
            zoomIn: true,
            zoomOut: true,
            oneToOne: true,
            reset: true,
            prev: true,
            next: true,
        },
        navbar: false,
        loop: false,
    })
})()
