const imagemBichinho = document.getElementById("petImage");

const estadosBichinho = {
    feliz: "feliz.png",
    bravo: "puto.png",
    morto: "morto.png",
    comendo: "comendo.png",
};

let contador = 0;
let intervalo = null;

function iniciarCiclo() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        if (contador === 30) {
            imagemBichinho.src = estadosBichinho.bravo;
        }

        if (contador === 60) {
            imagemBichinho.src = estadosBichinho.morto;
            clearInterval(intervalo);
        }
    }, 1000);
}

function alimentarBichinho() {
    contador = 0;
    imagemBichinho.src = estadosBichinho.comendo;

    setTimeout(() => {
        imagemBichinho.src = estadosBichinho.feliz;
        iniciarCiclo();
    }, 1500);
}

iniciarCiclo();