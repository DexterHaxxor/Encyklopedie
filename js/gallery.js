(function () {
    "use strict"

    new Viewer(document.getElementById("content"), {
        title: (image, data) => `${image.alt} (${data.naturalWidth} × ${data.naturalHeight})`,
        toolbar: {
            zoomIn: true,
            zoomOut: true,
            oneToOne: true,
            reset: true,
            prev: true,
            next: true
        },
        navbar: false,
        loop: false
    })
})()
