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
const openpu2 = document.getElementById("openModal2");
const closepu2 = document.getElementById("closeModal2");
const openpu3 = document.getElementById("openModal3");
const closepu3 = document.getElementById("closeModal3");
const openpu4 = document.getElementById("openModal4");
const closepu4 = document.getElementById("closeModal4");
const openpu5 = document.getElementById("openModal5");
const closepu5 = document.getElementById("closeModal5");
const openpu6 = document.getElementById("openModal6");
const closepu6 = document.getElementById("closeModal6");
const openpu7 = document.getElementById("openModal7");
const closepu7 = document.getElementById("closeModal7");
const openpu8 = document.getElementById("openModal8");
const closepu8 = document.getElementById("closeModal8");
const pu1 = document.getElementById("modal1");
const pu2 = document.getElementById("modal2");
const pu3 = document.getElementById("modal3");
const pu4 = document.getElementById("modal4");
const pu5 = document.getElementById("modal5");
const pu6 = document.getElementById("modal6");
const pu7 = document.getElementById("modal7");
const pu8 = document.getElementById("modal8");

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
//Fim Pop Ups