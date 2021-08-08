const rollDice = document.querySelector('#roll_btn')
const playerOneDice = document.querySelector('#player1')
const playerOneScore  = document.querySelector('#player1score')
const playerTwoDice = document.querySelector("#player2");
const playerTwoScore = document.querySelector("#player2score");
const turn = document.querySelector("#turn");
const replay = document.querySelector("#reset");
replay.style.display = "none";
turn.textContent = "Player One Will Roll The Dice"
document.body.prepend(turn)
let playerOne = true
let playerOneCount = 0
let playerTwoCount = 0

replay.addEventListener("click", 
function(){
    reset()
})

function reset(){
    replay.style.display = "none";
    rollDice.style.display = "block";
    playerOneCount = 0;
    playerTwoCount = 0;
    playerOneDice.innerHTML = "";
    playerTwoDice.innerHTML = "";
    playerOneScore.innerHTML = 0;
    playerTwoScore.innerHTML = 0;
}

function show(){
    replay.style.display = "block";
    rollDice.style.display = "none";
}

rollDice.addEventListener('click', 
function(){

    var dice = Math.floor(Math.random() * 6) + 1;
    if (playerOne && playerOneCount < 10) {
      playerOneDice.innerHTML = dice;
      playerOneCount = playerOneCount + dice;
      playerOneScore.innerHTML = playerOneCount;
      playerOne = false;
      turn.textContent = "Player Two Will Roll The Dice";
    } 
    
    else if (playerOneCount > 10) {
      turn.textContent = "A has won";
        show()
    } 
    else if (playerTwoCount > 10) {
      turn.textContent = "B has won";
      show() 
    } 
    else {
      playerTwoDice.innerHTML = dice;
      playerTwoCount = playerTwoCount + dice;
      playerTwoScore.innerHTML = playerTwoCount;
      playerOne = true;
      turn.textContent = "Player One Will Roll The Dice";
    }
})