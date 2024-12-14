// Функція для отримання цін криптовалют через API
async function fetchCryptoPrices() {
    console.log("Функція fetchCryptoPrices викликана!"); // Діагностика

    try {
        // Запит до API CoinGecko
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();

        // Оновлення HTML з отриманими даними
        document.getElementById("crypto-prices").innerHTML = `
            <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
            <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
        `;
        console.log("Отримані дані з API:", data); // Діагностика
    } catch (error) {
        console.error("Помилка під час отримання даних з API:", error); // Виведення помилки
        document.getElementById("crypto-prices").innerHTML = <p>Error loading prices.</p>;
    }
}

// Обробник для кнопки "Start Tracking"
document.getElementById("startButton").addEventListener("click", fetchCryptoPrices);

// Автоматичне завантаження даних при відкритті сторінки
window.onload = fetchCryptoPrices;
