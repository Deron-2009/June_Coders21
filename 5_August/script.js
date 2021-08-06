const dice = document.querySelector('#dice')
const result = document.querySelector('#result')
const example = document.querySelector('#example')
let diceValue = Math.floor((Math.random()*6)+1)
const sum = document.querySelector('#sum')
dice.addEventListener("click",
function(){
    let diceValue = Math.floor(Math.random() * 6 + 1)
    result.textContent = diceValue
    let add = diceValue
    sum.textContent = add +10
})