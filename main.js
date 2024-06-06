const startBtn = document.getElementById('start');
const pages = document.querySelectorAll('.page');
const timeController = document.getElementById('time-list');
const modal = document.getElementById('modal');
const board = document.getElementById('board');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');

let selectedTime = null;
let time = null;
let idSetInterval = null;


function handlerStartBtn (e) {
    e.preventDefault();
    pages[0].classList.add('up');
}

startBtn.addEventListener('click', handlerStartBtn);


function handlerTimeController(e) {
    if (e.target.classList.contains('time-list__item')) {
        pages[1].classList.add('up');
        selectedTime = parseInt(e.target.dataset.time);
        time = selectedTime;
        startGame();
        
    }
}

timeController.addEventListener('click', handlerTimeController);

function startGame() {
    setTime(time);
    idSetInterval = setInterval(decTime, 1000);
}

function finishGame() {
    clearInterval(idSetInterval);
}

function decTime() {
    if (time === 0) {   
        finishGame();
} else {
    let curent = --time;
    setTime(curent);
    
}   
}

function setTime(timeGame) {
   
    if (timeGame < 10) {
        timeGame = '0' + timeGame;
        console.log(timeGame);
    }
    timeEl.textContent = `00:${timeGame}`;
}
