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
        currentImageIndex = imagens.length - 1;
    }

    else if (currentImageIndex >= imagens.length) {
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

//PopUps
const openpu1 = document.getElementById("openModal1");
const closepu1 = document.getElementById("closeModal1");
const pu1 = document.getElementById("modal1");

const openpu2 = document.getElementById("openModal2");
const closepu2 = document.getElementById("closeModal2");
const pu2 = document.getElementById("modal2");

const openpu3 = document.getElementById("openModal3");
const closepu3 = document.getElementById("closeModal3");
const pu3 = document.getElementById("modal3");

const openpu4 = document.getElementById("openModal4");
const closepu4 = document.getElementById("closeModal4");
const pu4 = document.getElementById("modal4");

openpu1.addEventListener("click", () => {
    pu1.classList.add("open");
})
closepu1.addEventListener("click", () => {
    pu1.classList.remove("open");
})
  
openpu2.addEventListener("click", () => {
    pu2.classList.add("open");
})
closepu2.addEventListener("click", () => {
    pu2.classList.remove("open");
})
  
openpu3.addEventListener("click", () => {
    pu3.classList.add("open");
})
closepu3.addEventListener("click", () => {
    pu3.classList.remove("open");
})
  
openpu4.addEventListener("click", () => {
    pu4.classList.add("open");
})
closepu4.addEventListener("click", () => {
    pu4.classList.remove("open");
})


function alertaCarrinho() {
    alert("Produto Adicionado ao Carrinho!");
}


setInterval(mostrarPreco,1);

function mostrarPreco() {
    const quant1 = document.getElementById('qtd1').value;
    const quant2 = document.getElementById('qtd2').value;
    const quant3 = document.getElementById('qtd3').value;
    const quant4 = document.getElementById('qtd4').value;

    precofim1 = quant1 * 24.99;
    document.getElementById('preco1').innerHTML = precofim1;
    
    precofinal2 = quant2 * 54;
    document.getElementById('preco2').innerHTML = precofinal2;
    
    precofinal3 = quant3 * 60;
    document.getElementById('preco3').innerHTML = precofinal3;
    
    precofinal4 = quant4 * 25;
    document.getElementById('preco4').innerHTML = precofinal4;
    
}
