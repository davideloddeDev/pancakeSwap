let count = 0
let posizione = "position"
const position1 = document.querySelector('#position1')
const position2 = document.querySelector('#position2')
const position3 = document.querySelector('#position3')
const position4 = document.querySelector('#position4')
const position5 = document.querySelector('#position5')
const position6 = document.querySelector('#position6')

function selectionSlider() {
    setInterval(() => {
        count += 1
        if (count > 6) {
            count = 1
            console.log(posizione + count)
            slider(posizione + count)

        } else {
            console.log(posizione + count)
            slider(posizione + count)
        }

    }, 3000);
}

function slider(section) {
    const element = document.querySelector('#' + section)
    console.log(element)
    if (element) {
        if (element === position1) {
            console.log("condizione 1")
            element.style.display = "flex";
            position2.style.display = "none";
            position3.style.display = "none";
            position4.style.display = "none";
            position5.style.display = "none";
            position6.style.display = "none";
        }
        if (element === position2) {
            console.log("condizione 2")
            position1.style.display = "none";
            element.style.display = "flex";
            position3.style.display = "none";
            position4.style.display = "none";
            position5.style.display = "none";
            position6.style.display = "none";
        }
        if (element === position3) {
            console.log("condizione 3")
            position1.style.display = "none";
            position2.style.display = "none";
            element.style.display = "flex";
            position4.style.display = "none";
            position5.style.display = "none";
            position6.style.display = "none";
        }
        if (element === position4) {
            console.log("condizione 4")
            position1.style.display = "none";
            position2.style.display = "none";
            position3.style.display = "none";
            element.style.display = "flex";
            position5.style.display = "none";
            position6.style.display = "none";
        }
        if (element === position5) {
            console.log("condizione 5")
            position1.style.display = "none";
            position2.style.display = "none";
            position3.style.display = "none";
            position4.style.display = "none";
            element.style.display = "flex";
            position6.style.display = "none";
        }
        if (element === position6) {
            console.log("condizione 6")
            position1.style.display = "none";
            position2.style.display = "none";
            position3.style.display = "none";
            position4.style.display = "none";
            position5.style.display = "none";
            element.style.display = "flex";
        }



    }
}

selectionSlider()


