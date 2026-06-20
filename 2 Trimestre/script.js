function revelar() {

    document.getElementById("img-jogador").src = "img/_vinicius_junior.png";

    document.getElementById("span-nome").innerHTML =
        "Vinícius José Paixão de Oliveira Júnior";

    document.getElementById("span-nascimento").innerHTML =
        "12/07/2000 (25 anos)";

    document.getElementById("span-altura").innerHTML =
        "1,76 m";

    document.getElementById("span-posicao").innerHTML =
        "Ponta-esquerda / Atacante";

    document.getElementById("span-rank").innerHTML =
        "9,5";

    document.getElementById("span-nome").className = "card-text";
    document.getElementById("span-nascimento").className = "card-text";
    document.getElementById("span-altura").className = "card-text";
    document.getElementById("span-posicao").className = "card-text";
    document.getElementById("span-rank").className = "card-text";
}