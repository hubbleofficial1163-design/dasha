// Ждем полной загрузки страницы
window.addEventListener('load', function() {
    // Запускаем таймер
    startTimer();
});

function startTimer() {
    const timerElement = document.getElementById('timer');
    
    // Целевая дата: 26 июня 2026 года (в JavaScript месяцы с 0, поэтому 5 = июнь)
    const targetDate = new Date(2026, 5, 26, 0, 0, 0);
    
    function updateTimer() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            timerElement.innerHTML = `
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">дней</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">часов</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">минут</span>
                </div>
                <div class="time-unit">
                    <span class="time-number">0</span>
                    <span class="time-label">секунд</span>
                </div>
            `;
            return;
        }
        
        // Расчет дней, часов, минут и секунд
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Формируем HTML с цифрами и подписями под ними
        timerElement.innerHTML = `
            <div class="time-unit">
                <span class="time-number">${days}</span>
                <span class="time-label">дней</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${hours}</span>
                <span class="time-label">часов</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${minutes}</span>
                <span class="time-label">минут</span>
            </div>
            <div class="time-unit">
                <span class="time-number">${seconds}</span>
                <span class="time-label">секунд</span>
            </div>
        `;
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}   
