let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

document.getElementById("btn").addEventListener("click", () => {
    // Generate a random dice roll between 1 and 6
    let dice = Math.floor(Math.random() * 6) + 1;

    // Display the dice roll
    document.getElementById("value").textContent = `Dice: ${dice}`;

    if (currentPlayer === 1) {
        // Player 1's turn
        player1Score = dice;
        document.getElementById("player1").textContent = `Player 1: ${player1Score}`;
        currentPlayer = 2; // Switch to Player 2
        document.getElementById("result").textContent = "Player 2's turn!";
    } else if (currentPlayer === 2) {
        // Player 2's turn
        player2Score = dice;
        document.getElementById("player2").textContent = `Player 2: ${player2Score}`;

        // Determine the winner
        let resultMessage;
        if (player1Score > player2Score) {
            resultMessage = "Player 1 Wins!";
        } else if (player2Score > player1Score) {
            resultMessage = "Player 2 Wins!";
        } else {
            resultMessage = "It's a Tie!";
        }

        // Display the result and reset for the next game
        document.getElementById("result").textContent = resultMessage;
        currentPlayer = 1; // Reset to Player 1 for a new game
    }
});
