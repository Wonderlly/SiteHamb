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