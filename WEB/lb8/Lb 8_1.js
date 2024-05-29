document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid');
    const startGameBtn = document.getElementById('start-game-btn');
    const resetGameBtn = document.getElementById('reset-game-btn');
    const playerCountSelect = document.getElementById('player-count');
    const player2NameField = document.getElementById('player2-name');
    const roundsInput = document.getElementById('rounds');
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];
    let timerInterval = null;
    let currentPlayer = 1;
    let scores = { 1: 0, 2: 0 };
    let currentRound = 1;
    let totalRounds = parseInt(roundsInput.value, 10);
    let startTime;
    let roundScores = [];

    startGameBtn.addEventListener('click', startGame);
    resetGameBtn.addEventListener('click', resetGame);
    playerCountSelect.addEventListener('change', handlePlayerCountChange);

    function handlePlayerCountChange() {
        if (this.value === '2') {
            player2NameField.style.display = 'block';
        } else {
            player2NameField.style.display = 'none';
        }
    }

    function createBoard(rows, columns) {
        const cardArray = [];
        for (let i = 1; i <= rows * columns / 2; i++) {
            const faceImage = `img/face.jpg`;  
            const backImage = `img/${i % 8 + 1}.jpg`;
            cardArray.push({ faceImage, backImage, id: i });
            cardArray.push({ faceImage, backImage, id: i });
        }
    
        cardArray.sort(() => 0.5 - Math.random());
    
        grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        grid.innerHTML = '';
        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.setAttribute('data-id', index);
            cardElement.innerHTML = `<div class="face"><img src="${card.faceImage}" alt="Face image"></div>
                                     <div class="back"><img src="${card.backImage}" alt="Card image"></div>`;
            cardElement.addEventListener('click', flipCard);
            grid.appendChild(cardElement);
        });
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        if (!cardsChosenIds.includes(cardId)) {
            cardsChosen.push(this.innerHTML);
            cardsChosenIds.push(cardId);
            this.classList.add('flip');
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];
    
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Ви знайшли збіг');
            cards[optionOneId].style.visibility = 'hidden';
            cards[optionTwoId].style.visibility = 'hidden';
            scores[currentPlayer]++;
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].classList.remove('flip');
            cards[optionTwoId].classList.remove('flip');
        }
        updateScore();
        cardsChosen = [];
        cardsChosenIds = [];
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    
        
        if (cardsWon.length === cards.length / 2) {
            const endTime = new Date();
            console.log(startTime, endTime);
            const gameTime = (endTime - startTime) / 1000;
            if (isNaN(gameTime)) {
                console.error('Помилка в обрахунку часу', startTime, endTime);
            }

            roundScores.push({ round: currentRound, scores: { ...scores }, time: gameTime });

            setTimeout(() => {
                if (currentRound < totalRounds) {
                    alert(`Раунд ${currentRound} завершено. Результат: ${gameTime} секунд`);
                    currentRound++;
                    startNewRound();
                } else {
                    alert(`Раунд ${currentRound} завершено. Результат: ${gameTime} секунд`);
                    showFinalResults();
                }
            }, 1000);
        }
    }
    
    function updateScore() {
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        let scoreText = `Знайдені пари: ${name1}: ${scores[1]}`;
        if (playerCountSelect.value === '2') {
            scoreText += `, ${name2}: ${scores[2]}`;
        }
        const scoreElement = document.getElementById('score');
        scoreElement.textContent = scoreText;
    }
    

    function startGame() {
        totalRounds = parseInt(roundsInput.value, 10);
        currentRound = 1;
        roundScores = [];
        startNewRound();
    }

    function startNewRound() {
        const rows = parseInt(document.getElementById('rows').value, 10);
        const columns = parseInt(document.getElementById('columns').value, 10);
        if (rows < 4 || columns < 4 || rows * columns % 2 !== 0) {
            alert('Перевірте введені дані: мінімальний розмір поля 4x4 та парна кількість клітин.');
            return;
        }
        startTime = new Date();
        cardsChosen = [];
        cardsChosenIds = [];
        cardsWon = [];
        scores = { 1: 0, 2: 0 };
        grid.innerHTML = '';
        createBoard(rows, columns);
        setupTimer();
    }
    
    function setupTimer() {
        const difficulty = document.getElementById('difficulty').value;
        let time = difficulty === 'easy' ? 180 : difficulty === 'normal' ? 120 : 60;
        clearInterval(timerInterval);
        startCountdown(time);
    }

    function startCountdown(seconds) {
        const timer = document.getElementById('timer');
        timer.textContent = `Часу залишилось: ${seconds} секунд`;
        timerInterval = setInterval(() => {
            seconds--;
            timer.textContent = `Часу залишилось: ${seconds} секунд`;
            if (seconds <= 0) {
                clearInterval(timerInterval);
                alert(`Час вийшов! Ви не знайшли всі пари.`);
                const endTime = new Date();
                const gameTime = (endTime - startTime) / 1000;
                roundScores.push({ round: currentRound, scores: { ...scores }, time: gameTime });
    
                if (currentRound < totalRounds) {
                    currentRound++;
                    startNewRound();
                } else {
                    showFinalResults();
                }
            }
        }, 1000);
    }
    
    function showRoundResults() {
        let resultMessage = `Результати раунду ${currentRound}:\n`;
        resultMessage += `Час: ${roundScores[currentRound - 1].time} секунд\n`;
        resultMessage += `${document.getElementById('name1').value}: ${scores[1]} пар,\n`;
        if (playerCountSelect.value === '2') {
            resultMessage += `${document.getElementById('name2').value}: ${scores[2]} пар\n`;
        }
        alert(resultMessage);
    }
    
    function showFinalResults() {
        let winner = scores[1] > scores[2] ? document.getElementById('name1').value : document.getElementById('name2').value;
        let resultMessage = `Гра завершена. Переможець: ${winner}\n`;
        roundScores.forEach(score => {
            resultMessage += `Раунд ${score.round}: ${document.getElementById('name1').value} - ${score.scores[1]}, ${document.getElementById('name2').value} - ${score.scores[2]}, Час: ${score.time} секунд\n`;
        });
        alert(resultMessage);
    }
    
    function resetGame() {
        clearInterval(timerInterval);
        cardsChosen = [];
        cardsChosenIds = [];
        cardsWon = [];
        scores = { 1: 0, 2: 0 };
        updateScore();
        grid.innerHTML = '';
        createBoard(4, 4);
    }

   // createBoard(4, 4);
});