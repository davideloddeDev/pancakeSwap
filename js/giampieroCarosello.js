function scroller() {
    setInterval(() => {
        i = 0 //indice per scorrere l' html collection
        let posizione = myDiv[i].offsetWidth; //variabile che contiene la posizione iniziale di ogni elemento

        //primo elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) { //quando l'indice dell' elemento è arrivato alla posizione di arrivo
            indice[i] = - dim +posizione - gap; //imposta la sua partenza alla dimensione del percorso da fare + il gap per non far attaccare gli elementi - la posizione iniziale
        }
        i++; //aumenta per passare al prossimo html collection
        posizione += gap + myDiv[i].offsetWidth; //viene aggiornata la posizione al prossimo elemento

        //secondo elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        //terzo elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        //quarto elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        
        //quinto elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        
        //sesto elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        
        //stettimo elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        
        //ottavo elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;
        
        //nono elemento
        myDiv[i].style.right = indice[i] + "px";
        indice[i]++;
        if (indice[i] == posizione) {
            indice[i] = - dim +posizione - gap;
        }
        i++;
        posizione += gap + myDiv[i].offsetWidth;

    }, 20);
}
const myDiv = document.querySelector(".carosello-footer").children; //acqusisco HTML collection della classe ".carosello-footer"

gap = 32; //spazio creati dai gap ovvero 32px
let dim = gap * 8; //dimensione di quanto sia grande il carosello inizializzato alla dimensione dei gaps

let indice = []; // creo un array per contenere la posizione iniziale di ogni div di myDiv

for (let i = 0; i < myDiv.length; i++) {
    indice[i] = 0;//inizializzo tutti gli indici a 0

    dim += myDiv[i].offsetWidth; // sommo ogni dimensione di ogni elemento del carosello
}
console.log(dim)
scroller()