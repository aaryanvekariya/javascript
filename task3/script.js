let count = 0;

const countDisplay = document.getElementById('count');

function updateDisplay() {
    countDisplay.textContent = count;

    // Change the color based on the value
    if (count > 0) {
        countDisplay.style.color = '#28a745'; // Green for positive
    } else if (count < 0) {
        countDisplay.style.color = '#dc3545'; // Red for negative
    } else {
        countDisplay.style.color = '#ff6b6b'; // Default for zero
    }
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

// Initialize the display
updateDisplay();
