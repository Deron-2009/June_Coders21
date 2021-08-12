const slides = document.querySelectorAll(".slider-item");
// console.log(slides.length)
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let i = 0;
next.addEventListener("click",
function(){
    if(i < slides.length - 1){
    i = i + 1;
    slides[i].classList.add("visible-slide");
    console.log(`Slide NO. ${i} is added`)
    slides[i-1].classList.remove("visible-slide");
    console.log(`Slide NO. ${i-1} is removed`);
    }
})
prev.addEventListener("click",
function(){
    if(i > 0){
    i = i - 1;
    slides[i].classList.add("visible-slide");
    slides[i+1].classList.remove("visible-slide");
    }
})