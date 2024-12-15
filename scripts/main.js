// Логіка для перемикання між секціями
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Знімаємо "active" з усіх секцій
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    // Знімаємо "active" з усіх кнопок
    document.querySelectorAll(".nav-link").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Додаємо "active" до вибраної секції
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");

    // Додаємо "active" до натиснутої кнопки
    link.classList.add("active");
  });
});

// Функція для завантаження новин
async function loadNews() {
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "Завантаження новин...";
  
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/news");
    const news = await response.json();

    newsContainer.innerHTML = "";
    news.slice(0, 5).forEach((article) => {
      const newsCard = document.createElement("div");
      newsCard.className = "news-card";
      newsCard.innerHTML = <h3>${article.title}</h3><p>${article.description || "Без опису"}</p>;
      newsContainer.appendChild(newsCard);
    });
  } catch (error) {
    newsContainer.innerHTML = "Не вдалося завантажити новини.";
  }
}

// Викликаємо функцію для завантаження новин
loadNews();

async function updateCryptoPrices() {
  const btcPriceElement = document.getElementById('btc-price');
  const ethPriceElement = document.getElementById('eth-price');

  // Показати статус завантаження
  btcPriceElement.innerText = 'Завантаження...';
  ethPriceElement.innerText = 'Завантаження...';

  try {
    // Отримання ціни для Bitcoin
    const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    if (!btcResponse.ok) throw new Error('Помилка BTC API');
    const btcData = await btcResponse.json();
    btcPriceElement.innerText = $${parseFloat(btcData.price).toFixed(2)};

    // Отримання ціни для Ethereum
    const ethResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
    if (!ethResponse.ok) throw new Error('Помилка ETH API');
    const ethData = await ethResponse.json();
    ethPriceElement.innerText = $${parseFloat(ethData.price).toFixed(2)};
  } catch (error) {
    console.error('Помилка отримання даних:', error);
    btcPriceElement.innerText = 'Не вдалося завантажити';
    ethPriceElement.innerText = 'Не вдалося завантажити';
  }
}

// Виклик функції та оновлення кожну хвилину
updateCryptoPrices();
setInterval(updateCryptoPrices, 60000); // Оновлення кожну хвилину
