
//Novidades
let currentImageIndex = 0;
const imagens = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg"];

setInterval(autoMudarImagem,7000);

function autoMudarImagem() {
    mudarImagem(1)
}

function mudarImagem(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = imagens.length - 1;
    }

    if (currentImageIndex >= imagens.length) {
        currentImageIndex = 0;
    }

    const imagensElement = document.querySelectorAll(".imagem");

    imagensElement.forEach((imagem, index) => {
        if (index === currentImageIndex) {
            imagem.style.opacity = 1;
        } 
        else {
            imagem.style.opacity = 0;
        }
    });
}

//setInterval(mudarImagem,2000);
//Fim Novidades