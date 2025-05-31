
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    updateDigit('hours-first', parseInt(hours[0]), 3);
    updateDigit('hours-second', parseInt(hours[1]), 10);
    
    updateDigit('minutes-first', parseInt(minutes[0]), 6);
    updateDigit('minutes-second', parseInt(minutes[1]), 10);
    
    updateDigit('seconds-first', parseInt(seconds[0]), 6);
    updateDigit('seconds-second', parseInt(seconds[1]), 10);
}

function updateDigit(elementId, value, maxDigits) {
    const element = document.getElementById(elementId);
    const offset = -value * (100 / maxDigits);
    element.style.transform = `translateY(${offset}%)`;
}

updateClock();

setInterval(updateClock, 1000);