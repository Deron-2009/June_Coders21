const random = document.getElementById("random")
const body = document.querySelector("body")
const heading = document.querySelector("h1")

random.addEventListener("click",
function(){
    let randomColor = Math.floor(Math.random()*10000000).toString(16);
    heading.textContent = "#"+randomColor
    body.style.backgroundColor = "#"+randomColor;     
})
