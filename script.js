let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;
let lapCount = 0;
let lapList = document.getElementById('lap-list');

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
document.getElementById('lap-btn').addEventListener('click', addLap);

function startStopwatch() {
    intervalId = setInterval(updateTime, 1000);
    document.getElementById('start-btn').disabled = true;
    document.getElementById('pause-btn').disabled = false;
}

function pauseStopwatch() {
    clearInterval(intervalId);
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
}

function resetStopwatch() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCount = 0;
    lapList.innerHTML = '';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    clearInterval(intervalId);
    document.getElementById('start-btn').disabled = false;
    document.getElementById('pause-btn').disabled = true;
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function addLap() {
    lapCount++;
    const lapTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const li = document.createElement('li');
    li.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(li);
}