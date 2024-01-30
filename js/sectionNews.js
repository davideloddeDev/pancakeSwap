
function moveRight() {
    let i = 0;
    let id = setInterval(() => {
        document.documentElement.querySelector("#bottom-section").scrollLeft += 1;
        i++;
        if (i == 313) {
            clearInterval(id)
        }
    }, 0.1);

}

function moveLeft() {
    let i = 0;
    let id = setInterval(() => {
        document.documentElement.querySelector("#bottom-section").scrollLeft -= 1;
        i++;
        if (i == 313) {
            clearInterval(id)
        }
    }, 0.1);

}