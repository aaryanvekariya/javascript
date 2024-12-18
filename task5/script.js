// Get the elements
const roll1Btn = document.getElementById("roll1");
const roll2Btn = document.getElementById("roll2");
const resetBtn = document.getElementById("reset");
const player1Dice = document.getElementById("player1-dice");
const player2Dice = document.getElementById("player2-dice");
const resultMessage = document.getElementById("result-message");

let player1Score = 0;
let player2Score = 0;

// Dice Roll Function
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Player 1 Roll
roll1Btn.addEventListener("click", () => {
    player1Score = rollDice();
    player1Dice.textContent = `🎲 ${player1Score}`;
    roll1Btn.disabled = true;
    roll2Btn.disabled = false;
});

// Player 2 Roll
roll2Btn.addEventListener("click", () => {
    player2Score = rollDice();
    player2Dice.textContent = `🎲 ${player2Score}`;
    roll2Btn.disabled = true;
    
    // Check who won
    if (player1Score > player2Score) {
        resultMessage.textContent = "Player 1 Wins!";
    } else if (player2Score > player1Score) {
        resultMessage.textContent = "Player 2 Wins!";
    } else {
        resultMessage.textContent = "It's a Tie!";
    }
});

// Reset the game
resetBtn.addEventListener("click", () => {
    player1Score = 0;
    player2Score = 0;
    player1Dice.textContent = "🎲";
    player2Dice.textContent = "🎲";
    resultMessage.textContent = "";
    roll1Btn.disabled = false;
    roll2Btn.disabled = true;
});
