    let winCount = 0;
    let loseCount = 0;
    let drawCount = 0;

    const rockOption = document.getElementById('RockOption');
    const paperOption = document.getElementById('PapperOption');
    const scissorsOption = document.getElementById('ScissorsOption');

    const computerDisplay = document.getElementById('computerDisplay');

    const winScoreElement = document.getElementById('WinScore');
    const loseScoreElement = document.getElementById('LoseScore');
    const drawScoreElement = document.getElementById('DrawScore');

    const resetBtn = document.getElementById('resetBtn');

    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        'rock': '✊',
        'paper': '✋',
        'scissors': '✌️'
    };

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();

        computerDisplay.innerHTML = emojis[computerChoice];

        if (playerChoice === computerChoice) {
            drawCount++;
            drawScoreElement.textContent = drawCount;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            winCount++;
            winScoreElement.textContent = winCount;
        } else {
            loseCount++;
            loseScoreElement.textContent = loseCount;
        }
    }

    rockOption.addEventListener('click', () => playGame('rock'));
    paperOption.addEventListener('click', () => playGame('paper'));
    scissorsOption.addEventListener('click', () => playGame('scissors'));

    resetBtn.addEventListener('click', () => {
        winCount = 0;
        loseCount = 0;
        drawCount = 0;

        winScoreElement.textContent = 0;
        loseScoreElement.textContent = 0;
        drawScoreElement.textContent = 0;

        computerDisplay.innerHTML = '✊';
    });