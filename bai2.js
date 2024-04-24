let countdown;
let alarmSound = document.getElementById('alarmSound');
let timerElement = document.getElementById('timer');
function startTimer() {
    const minutes = parseInt(document.getElementById('minutesInput').value);
    const seconds = parseInt(document.getElementById('secondsInput').value);
    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0) {
        alert('Please enter valid minutes and seconds.');
        return;
    }
    const totalTime = (minutes * 60) + seconds;
    let remainingTime = totalTime;
    countdown = setInterval(() => {
        remainingTime--;
        const minutesLeft = Math.floor(remainingTime / 60);
        const secondsLeft = remainingTime % 60;

        timerElement.innerHTML = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

        if (remainingTime === 0) {
            clearInterval(countdown);
            timerElement.innerHTML = 'Time\'s up!';
            alarmSound.play();
            document.getElementById('resetButton').disabled = false;
        }
    }, 1000);
    document.getElementById('startButton').disabled = true;
}
function resetTimer() {
    clearInterval(countdown);
    timerElement.innerHTML = '';
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById('startButton').disabled = false;
    document.getElementById('resetButton').disabled = true;
}