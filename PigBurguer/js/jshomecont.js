const cont = document.querySelectorAll(".page");
const translateAmount = 100; 
let translate = 0;

slide = (direction) => {
    direction === "next" ? translate += translateAmount : translate -= translateAmount;
    cont.forEach(
        pages => (pages.style.transform = `translateX(${translate}%)`)
      );
}