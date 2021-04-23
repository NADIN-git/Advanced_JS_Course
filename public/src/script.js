let timeMinut = document.getElementById("t_text"); // Берём строку
let buttonRun = document.getElementById("start"); // Берём кнопку запуска
let timerShow = document.getElementById("t_show"); // Берём блок для показа времени
//let timeMinut = "";

buttonRun.addEventListener('submit', function () {
    timeMinut = parseInt(timeMinut.value) * 60
})
console.log(timeMinut.value)

timer = setInterval(function () {
    console.log(timeMinut)
    seconds = timeMinut % 60 // Получаем секунды
    minutes = timeMinut / 60 % 60 // Получаем минуты
    hour = timeMinut / 60 / 60 % 60 // Получаем часы
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}`
        // :${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
    console.log(timeMinut)
}, 1000)