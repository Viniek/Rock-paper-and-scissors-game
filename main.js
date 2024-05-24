document.addEventListener("DOMContentLoaded", () => {
    const choices = ["✊", "✋", "✌️"];
    const outcomes = {
        "✊✌️": "player",
        "✌️✋": "player",
        "✋✊": "player",
        "✌️✊": "computer",
        "✋✌️": "computer",
        "✊✋": "computer",
    };

    const computerHandEl = document.querySelector(".computer-hand .icon");
    const playerHandEl = document.querySelector(".player-hand .icon");
    const resultTextEl = document.querySelector(".result-text");

    const computerScoreEl = document.querySelector(".computer-score");
    const playerScoreEl = document.querySelector(".player-score");

    let computerScore = 0;
    let playerScore = 0;

    document.querySelector(".rock").addEventListener("click", () => playGame("✊"));
    document.querySelector(".paper").addEventListener("click", () => playGame("✋"));
    document.querySelector(".scissors").addEventListener("click", () => playGame("✌️"));

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerHandEl.textContent = computerChoice;
        playerHandEl.textContent = playerChoice;

        if (playerChoice === computerChoice) {
            resultTextEl.textContent = "Draw";
        } else {
            const outcome = outcomes[playerChoice + computerChoice];
            if (outcome === "player") {
                resultTextEl.textContent = "Player wins";
                playerScore++;
            } else {
                resultTextEl.textContent = "Computer wins";
                computerScore++;
            }
        }

        computerScoreEl.textContent = computerScore;
        playerScoreEl.textContent = playerScore;
    }
});
