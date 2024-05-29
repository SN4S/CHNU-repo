function digitalClock() {
    const clockElement = document.querySelector('.clock_watch');
    const clockSeconds = document.querySelector('.clock_seconds');

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}`;
        clockSeconds.textContent = ":" + seconds;
    }

    setInterval(updateClock, 1000);
    setInterval(() => {
        clockSeconds.style.visibility = (clockSeconds.style.visibility === 'visible') ? 'hidden' : 'visible';},500);
}

digitalClock();

const timerButton = document.querySelector('.clock_timer_button');
let updateTimer;
function timer() {
    const setTimeInput = document.querySelector('.clock_timer_input').value;
    const timerText = document.querySelector('.clock_timer_info');
    clearInterval(updateTimer);
    function updateClock() {
        const setTime = new Date (setTimeInput);
        const currentTime = new Date();
        if (setTime > currentTime) {
            const timeDiff = setTime - currentTime;
            let seconds = Math.floor(timeDiff / 1000) % 60;
            let minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
            let hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
            let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

            seconds = (seconds < 10) ? '0' + seconds : seconds;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            hours = (hours < 10) ? '0' + hours : hours;

            const timeTimer = `${days} днів, ${hours}:${minutes}:${seconds}`;
            timerText.textContent = timeTimer;
        } else {
            timerText.textContent = 'Задайте час більший за теперішній.';
        }

    }
    updateTimer = setInterval(updateClock, 1000);
}

timerButton.addEventListener("click", timer);