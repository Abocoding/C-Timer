let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Format the time (MM:SS)
function formatTime() {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Start the timer
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.textContent = 'Pause';
        stopBtn.disabled = false;
        
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            display.textContent = formatTime();
        }, 1000);
    } else {
        // Pause the timer
        clearInterval(timer);
        isRunning = false;
        startBtn.textContent = 'Resume';
    }
});

// Stop the timer
stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startBtn.textContent = 'Start';
    stopBtn.disabled = true;
});

// Reset the timer
resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    seconds = 0;
    display.textContent = formatTime();
    startBtn.textContent = 'Start';
    stopBtn.disabled = true;
});
