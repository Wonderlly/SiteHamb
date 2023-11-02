//Mudar Páginas
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const area = document.querySelector(".areacardapio_todos");

btn1.addEventListener("click", () => {
  area.style.transform = "translateX(0%)";
});
btn2.addEventListener("click", () => {
  area.style.transform = "translateX(-25%)";

});
btn3.addEventListener("click", () => {
    area.style.transform = "translateX(-50%)";
  
});
  btn4.addEventListener("click", () => {
    area.style.transform = "translateX(-75%)";
  
});
//Fim Mudar Páginas

//Pop Ups
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

const openpu5 = document.getElementById("openModal5");
const closepu5 = document.getElementById("closeModal5");
const pu5 = document.getElementById("modal5");

const openpu6 = document.getElementById("openModal6");
const closepu6 = document.getElementById("closeModal6");
const pu6 = document.getElementById("modal6");

const openpu7 = document.getElementById("openModal7");
const closepu7 = document.getElementById("closeModal7");
const pu7 = document.getElementById("modal7");

const openpu8 = document.getElementById("openModal8");
const closepu8 = document.getElementById("closeModal8");
const pu8 = document.getElementById("modal8");

const openpu9 = document.getElementById("openModal9");
const closepu9 = document.getElementById("closeModal9");
const pu9 = document.getElementById("modal9");

const openpu10 = document.getElementById("openModal10");
const closepu10 = document.getElementById("closeModal10");
const pu10 = document.getElementById("modal10");

const openpu11 = document.getElementById("openModal11");
const closepu11 = document.getElementById("closeModal11");
const pu11 = document.getElementById("modal11");

const openpu12 = document.getElementById("openModal12");
const closepu12 = document.getElementById("closeModal12");
const pu12 = document.getElementById("modal12");

const openpu13 = document.getElementById("openModal13");
const closepu13 = document.getElementById("closeModal13");
const pu13 = document.getElementById("modal13");

const openpu14 = document.getElementById("openModal14");
const closepu14 = document.getElementById("closeModal14");
const pu14 = document.getElementById("modal14");

const openpu15 = document.getElementById("openModal15");
const closepu15 = document.getElementById("closeModal15");
const pu15 = document.getElementById("modal15");

const openpu16 = document.getElementById("openModal16");
const closepu16 = document.getElementById("closeModal16");
const pu16 = document.getElementById("modal16");

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

openpu5.addEventListener("click", () => {
  pu5.classList.add("open");
})
closepu5.addEventListener("click", () => {
  pu5.classList.remove("open");
})

openpu6.addEventListener("click", () => {
  pu6.classList.add("open");
})
closepu6.addEventListener("click", () => {
  pu6.classList.remove("open");
})

openpu7.addEventListener("click", () => {
  pu7.classList.add("open");
})
closepu7.addEventListener("click", () => {
  pu7.classList.remove("open");
})

openpu8.addEventListener("click", () => {
  pu8.classList.add("open");
})
closepu8.addEventListener("click", () => {
  pu8.classList.remove("open");
})

openpu9.addEventListener("click", () => {
  pu9.classList.add("open");
})
closepu9.addEventListener("click", () => {
  pu9.classList.remove("open");
})

openpu10.addEventListener("click", () => {
  pu10.classList.add("open");
})
closepu10.addEventListener("click", () => {
  pu10.classList.remove("open");
})

openpu11.addEventListener("click", () => {
  pu11.classList.add("open");
})
closepu11.addEventListener("click", () => {
  pu11.classList.remove("open");
})

openpu12.addEventListener("click", () => {
  pu12.classList.add("open");
})
closepu12.addEventListener("click", () => {
  pu12.classList.remove("open");
})

openpu13.addEventListener("click", () => {
  pu13.classList.add("open");
})
closepu13.addEventListener("click", () => {
  pu13.classList.remove("open");
})

openpu14.addEventListener("click", () => {
  pu14.classList.add("open");
})
closepu14.addEventListener("click", () => {
  pu14.classList.remove("open");
})

openpu15.addEventListener("click", () => {
  pu15.classList.add("open");
})
closepu15.addEventListener("click", () => {
  pu15.classList.remove("open");
})

openpu16.addEventListener("click", () => {
  pu16.classList.add("open");
})
closepu16.addEventListener("click", () => {
  pu16.classList.remove("open");
})

//Fim Pop Ups

//Alerta
function alertaCarrinho() {
  alert("Produto Adicionado ao Carrinho!");
}
//Fim Alerta

//Preços
setInterval(mostrarPreco,1);

function mostrarPreco() {
  const quant1 = document.getElementById('qtd1').value;
  const quant2 = document.getElementById('qtd2').value;
  const quant3 = document.getElementById('qtd3').value;
  const quant4 = document.getElementById('qtd4').value;
  const quant5 = document.getElementById('qtd5').value;
  const quant6 = document.getElementById('qtd6').value;
  const quant7 = document.getElementById('qtd7').value;
  const quant8 = document.getElementById('qtd8').value;
  const quant9 = document.getElementById('qtd9').value;
  const quant10 = document.getElementById('qtd10').value;
  const quant11 = document.getElementById('qtd11').value;
  const quant12 = document.getElementById('qtd12').value;
  const quant13 = document.getElementById('qtd13').value;
  const quant14 = document.getElementById('qtd14').value;
  const quant15 = document.getElementById('qtd15').value;
  const quant16 = document.getElementById('qtd16').value;
  
  precofinal1 = quant1 * 20;
  document.getElementById('preco1').innerHTML = precofinal1;
    
  precofinal2 = quant2 * 31;
  document.getElementById('preco2').innerHTML = precofinal2;
    
  precofinal3 = quant3 * 27;
  document.getElementById('preco3').innerHTML = precofinal3;
    
  precofinal4 = quant4 * 25;
  document.getElementById('preco4').innerHTML = precofinal4;
    
  precofinal5 = quant5 * 27;
  document.getElementById('preco5').innerHTML = precofinal5;
    
  precofinal6 = quant6 * 23;
  document.getElementById('preco6').innerHTML = precofinal6;
    
  precofinal7 = quant7 * 26;
  document.getElementById('preco7').innerHTML = precofinal7;
    
  precofinal8 = quant8 * 30;
  document.getElementById('preco8').innerHTML = precofinal8;
    
  precofinal9 = quant9 * 5;
  document.getElementById('preco9').innerHTML = precofinal9;
    
  precofinal10 = quant10 * 5;
  document.getElementById('preco10').innerHTML = precofinal10

  precofinal11 = quant11 * 5;
  document.getElementById('preco11').innerHTML = precofinal11;
    
  precofinal12 = quant12 * 5;
  document.getElementById('preco12').innerHTML = precofinal12;
    
  precofinal13 = quant13 * 10;
  document.getElementById('preco13').innerHTML = precofinal13;
    
  precofinal14 = quant14 * 7;
  document.getElementById('preco14').innerHTML = precofinal14;
    
  precofinal15 = quant15 * 7;
  document.getElementById('preco15').innerHTML = precofinal15;
    
  precofinal16 = quant16 * 3;
  document.getElementById('preco16').innerHTML = precofinal16;
  
}
//Fim Preços