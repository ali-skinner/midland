// from claude - i asked about recording clicks to a user array for the game


// This creates an array to store the user's clicks
let userClicks = [];

// Add click handlers to each game button
gameButtonArray.forEach((button, index) => {
    button.addEventListener('click', () => {
        // When clicked, store which button (0-3) was clicked
        userClicks.push(index);
        
        // Light up the button
        button.classList.add("gameButtonBright");
        setTimeout(() => {
            button.classList.remove("gameButtonBright");
        }, 500);

        // Now you can compare this click to the computer's sequence
        checkUserInput(index);
    });
});

// Function to check if user clicked the right button
function checkUserInput(clickedIndex) {
    // Get which position in the sequence we're checking
    const currentPosition = userClicks.length - 1;
    
    // Compare with computer's sequence
    if (clickedIndex !== computerGame[currentPosition]) {
        // Wrong button!
        gameOver();
    } else if (userClicks.length === computerGame.length) {
        // Completed the sequence successfully!
        // Wait a bit, then add new color to sequence
        setTimeout(() => {
            addToComputerSequence();
        }, 1000);
    }
}