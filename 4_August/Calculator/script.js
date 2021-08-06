const x = document.getElementById('x')
const y = document.getElementById('y')
const add = document.getElementById('add')
const answer = document.getElementById('answer')
const minus = document.getElementById('minus')
add.addEventListener("click",
function(){
    answer.textContent = parseInt(x.value) + parseInt(y.value)
})
minus.addEventListener("click",
function(){
    answer.textContent = parseInt(x.value) - parseInt(y.value)
})