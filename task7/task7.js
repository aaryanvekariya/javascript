let targetNumber;
let attempts = 0;

function startGame() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    // Validate the range
    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Please enter a valid range where the minimum is less than the maximum.");
        return;
    }

    // Set the target number
    targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    attempts = 0;

    // Hide the range input section and show the game section
    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";

    // Update message with the guessed range
    document.getElementById("message").innerText = `Guess a number between ${min} and ${max}.`;
    document.getElementById("feedback").innerText = "";
    document.getElementById("resetButton").style.display = "none";
    document.getElementById("guess").disabled = false;
    document.getElementById("guess").value = "";
}

function makeGuess() {
    const guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess)) {
        document.getElementById("feedback").innerText = "Please enter a valid number.";
        return;
    }

    attempts++;

    if (guess > targetNumber) {
        document.getElementById("feedback").innerText = "Too high! Try again.";
    } else if (guess < targetNumber) {
        document.getElementById("feedback").innerText = "Too low! Try again.";
    } else {
        document.getElementById("feedback").innerText = `🎊🎉Congratulations!🎊🎉 You guessed the number ${targetNumber} in ${attempts} attempts.`;
        document.getElementById("guess").disabled = true;
        document.getElementById("resetButton").style.display = "inline-block";
    }
}

function resetGame() {
    // Reset the game interface to the initial state
    document.getElementById("setup").style.display = "block";
    document.getElementById("game").style.display = "none";
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
}
