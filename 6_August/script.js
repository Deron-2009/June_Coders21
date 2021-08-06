const rollDice = document.querySelector('#roll_btn')
const playerOneDice = document.querySelector('#player1')
const playerOneScore  = document.querySelector('#player1score')
const playerTwoDice = document.querySelector("#player2");
const playerTwoScore = document.querySelector("#player2score");
let playerOne = true
let playerOneCount = 0
let playerTwoCount = 0
rollDice.addEventListener('click', 
function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    if (playerOne)
    {
        playerOneDice.innerHTML = dice;
        playerOneCount = playerOneCount + dice;
        playerOneScore.innerHTML = playerOneCount;
        playerOne = false
    } 
   else{
        playerTwoDice.innerHTML = dice;
        playerTwoCount = playerTwoCount + dice;
        playerTwoScore.innerHTML = playerTwoCount;
        playerOne = true
   }
})