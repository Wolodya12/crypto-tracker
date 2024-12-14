// Функція для отримання курсів криптовалют
async function fetchCryptoPrices() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
        const data = await response.json();

        document.getElementById("prices").innerHTML = `
            <p><strong>Bitcoin:</strong> $${data.bitcoin.usd}</p>
            <p><strong>Ethereum:</strong> $${data.ethereum.usd}</p>
        `;
    } catch (error) {
        console.error("Error fetching prices:", error);
        document.getElementById("prices").innerHTML = <p>Error loading prices...</p>;
    }
}

// Функція для навігації
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
        alert(`Clicked on ${button.textContent}`);
    });
});

// Автоматичне завантаження даних
window.onload = fetchCryptoPrices;
