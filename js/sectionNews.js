function moveRight() {
    let i = 0;
    let id = setInterval(() => {
        document.querySelector("#bottom-section").scrollLeft += 5;
        i++;
        if (i == 63) {
            clearInterval(id);
        }
    }, 0);
}

function moveLeft() {
    let i = 0;
    let id = setInterval(() => {
        document.querySelector("#bottom-section").scrollLeft -= 5;
        i++;
        if (i == 63) {
            clearInterval(id);
        }
    }, 0);
}

document.querySelector("#freccia-destra").addEventListener("click", moveRight);
document.querySelector("#freccia-sinistra").addEventListener("click", moveLeft);