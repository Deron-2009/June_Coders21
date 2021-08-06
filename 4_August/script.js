const add = document.querySelector('#add')
const minus = document.querySelector('#minus')
const display = document.querySelector('#display')
const reset = document.querySelector('#reset')
const error = document.querySelector('#error')
var num = 0
add.addEventListener("click",
function(){
    num = num + 1
    display.innerText = num
    error.innerText = "";
})
minus.addEventListener("click",
function(){
    if (num > 0){
    num = num - 1;
    display.innerText = num;
    }
    else{
    num = 0;
    display.innerText = num;
    error.innerText = "You are not allowed to go beyong Zero. Don't press the button if it is zero"
    }
})
reset.addEventListener("click",
function(){
    num = 0;
    display.innerText = num;
    error.innerText = ""
})
