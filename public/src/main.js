import {
    diffDates,
    diffToHtml
}
from "./datecalc.js"; // 1
import {
    formatError
} from "./utils.js"; // 2

const mySwitch = document.getElementById("calcDiv");
mySwitch.style.display = "none";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let {
        firstDate,
        secondDate
    } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}

const timeStart = document.getElementById("timeTask");
//const timeStart = document.querySelector('#timeStart')
const timeShow = document.getElementById("timeShow");
const timeStop = document.getElementById("timeStop");
//let notification = new Audio('./notification.mp3');

timeStart.addEventListener('submit', startTimer);

function startTimer(event) {
    timeShow.innerHTML = "";
    event.preventDefault();
    let timeInput = event.target.timeInput;
    timeInput = parseInt(timeInput.value);

    if (timeInput > 0) {
        let timer = setInterval(function () {
            let seconds = timeInput % 60; // Получаем секунды            
            let minuts = timeInput / 60 % 60; // Получаем минуты            
            let hour = timeInput / 60 / 60 % 60; // Получаем часы            
            let timeConv = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
            timeShow.innerHTML = timeConv;
            --timeInput; // Уменьшаем таймер   
            if (timeInput == -1) {
                clearInterval(timer);
                let audio = new Audio(); // Создаём новый элемент Audio
                audio.src = './src/notification.mp3'; // Указываем путь к звуку "клика"
                audio.autoplay = true; // Автоматически запускаем                
                // Таймер удаляется
                clearInterval(timeInput);
                timeShow.innerHTML = formatError("Время вышло");
            }
        }, 1000);
    } else timeShow.innerHTML = formatError("Для запуска таймера определите интервал времени"); // 5
}