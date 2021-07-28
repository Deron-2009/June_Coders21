const body = document.querySelector("body")
// const heading = document.querySelector("h1");
// heading.addEventListener(
//   "click",
//   function(){
//       heading.innerText = "Hello, Bello";
//       heading.style.backgroundColor = "red";
//       window.alert("Look, I am different now")
//   }
// )
// body.style.backgroundColor = "yellow"
// const blackBtn = document.querySelector("#black_btn")
// blackBtn.addEventListener("click", function () {
//   body.style.backgroundColor = "black";
// });
// const greenBtn = document.querySelector("#green_btn")
// greenBtn.addEventListener("click", function () {
//   body.style.backgroundColor = "green";
// });
const input = document.querySelector("#write_color")
const btn = document.querySelector("#color_btn");
const heading = document.querySelector("h1")
btn.addEventListener("click",
function(){
    body.style.backgroundColor = input.value
})
