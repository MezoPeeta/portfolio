const trailer = document.getElementById("trailer")!

const animateTrailer = (e: MouseEvent, interacting: any) => {
    const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
    }

    trailer!.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })

}
const getTrailerClass = (type: any) => {
    switch (type) {
        case "video":
            return "fa-solid fa-play";
        case "link":
            return "fa-solid fa-arrow-up-right";

        default:
            return ""
    }
}


window.onmousemove = (e:any) => {
    const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;


    animateTrailer(e, interacting)
    const icon = document.getElementById("trailer-icon")!

    trailer.dataset.type = interacting ? interactable.dataset.type : "";

    if (interacting) {
        icon.className = getTrailerClass(interactable.dataset.type);
    }
}
