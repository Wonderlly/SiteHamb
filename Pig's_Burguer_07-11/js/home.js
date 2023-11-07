//Carrosel
let currentImageIndex = 0;
const imagens = ["tresporquinhos.png", "fazendinha.png", "tradicional.png", "familia.png", "sundaes.png"];

setInterval(function autoMudarImagem() {
    mudarImagem(1)
},4000);

function autoMudarImagem() {
    mudarImagem(1)
}

function mudarImagem(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = imagens.length;
    }

    if (currentImageIndex >= imagens.length) {
        currentImageIndex = 0;
    }

    const imagensElement = document.querySelectorAll(".imagem");

    imagensElement.forEach((imagem, index) => {
        if (index == currentImageIndex) {
            imagem.style.opacity = 1;
        } 
        else {
            imagem.style.opacity = 0;
        }
    });
}
//Fim Carrossel

//Área Conteúdo
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const page = document.querySelector(".cont");
const pagemobile = document.querySelector(".cont-mobile");

btn1.addEventListener("click", () => {
  page.style.transform = "translateX(0%)";
//  pagemobile.style.transform = "translateX(0%)";
});
btn2.addEventListener("click", () => {
  page.style.transform = "translateX(-50%)";
//  pagemobile.style.transform = "translateX(-100%)";
});


//Fim Área Conteúdo