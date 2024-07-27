// script.js
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const timeDisplay = document.getElementById('time');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', startStopTimer);
resetBtn.addEventListener('click', resetTimer);

function startStopTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 1);
    running = true;
    startStopBtn.textContent = 'Stop';
  } else {
    clearInterval(tInterval);
    running = false;
    startStopBtn.textContent = 'Start';
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  startStopBtn.textContent = 'Start';
  timeDisplay.textContent = '00:00:00:000';
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  const hours = Math.floor(difference / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(difference % 1000);

  timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatMilliseconds(milliseconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  if (time < 10) return `00${time}`;
  if (time < 100) return `0${time}`;
  return time;
}
