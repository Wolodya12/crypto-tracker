// Функція для отримання цін криптовалют через API
async function fetchCryptoPrices() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await response.json();

        // Оновлення HTML
        document.getElementById("crypto-prices").innerHTML = `
            <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
            <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
        `;
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
        document.getElementById("crypto-prices").innerHTML = <p>Error loading prices.</p>;
    }
}

// Додати функціонал кнопки "Start Tracking"
document.getElementById("startButton").addEventListener("click", fetchCryptoPrices);

// Викликати функцію автоматично при завантаженні сторінки
window.onload = fetchCryptoPrices;
