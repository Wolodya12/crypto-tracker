// Оновлення цін криптовалют через Binance API
async function updateCryptoPrices() {
  const btcPriceElement = document.getElementById('btc-price');
  const ethPriceElement = document.getElementById('eth-price');

  btcPriceElement.innerText = 'Завантаження...';
  ethPriceElement.innerText = 'Завантаження...';

  try {
    const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
    const btcData = await btcResponse.json();
    btcPriceElement.innerText = $${parseFloat(btcData.price).toFixed(2)};

    const ethResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
    const ethData = await ethResponse.json();
    ethPriceElement.innerText = $${parseFloat(ethData.price).toFixed(2)};
  } catch (error) {
    console.error('Помилка отримання даних:', error);
    btcPriceElement.innerText = 'Не вдалося завантажити';
    ethPriceElement.innerText = 'Не вдалося завантажити';
  }
}

// Завантаження новин про криптовалюти
async function loadCryptoNews() {
  const newsContainer = document.getElementById('crypto-news');
  newsContainer.innerHTML = 'Завантаження новин...';

  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/news'
    );
    const newsData = await response.json();
    newsContainer.innerHTML = '';

    newsData.data.slice(0, 5).forEach((news) => {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = <h3>${news.title}</h3><p>${news.content}</p>;
      newsContainer.appendChild(newsItem);
    });
  } catch (error) {
    console.error('Помилка завантаження новин:', error);
    newsContainer.innerHTML = 'Не вдалося завантажити новини';
  }
}

// Перемикання між секціями через кнопки
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.bottom-nav button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    sections.forEach((section) => section.classList.remove('active'));
    sections[index].classList.add('active');
  });
});

// Оновлювати ціни та завантажувати новини
updateCryptoPrices();
setInterval(updateCryptoPrices, 60000);
loadCryptoNews();
async function fetchPrices() {
  try {
    // Отримання даних з Binance API
    const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT"]');
    const data = await response.json();

    // Відображення ціни для BTC і ETH
    const btcPrice = data.find((item) => item.symbol === "BTCUSDT");
    const ethPrice = data.find((item) => item.symbol === "ETHUSDT");

    document.getElementById('btc-price').innerText = $${parseFloat(btcPrice.price).toFixed(2)};
    document.getElementById('eth-price').innerText = $${parseFloat(ethPrice.price).toFixed(2)};
  } catch (error) {
    console.error("Error fetching prices:", error);
    document.getElementById('btc-price').innerText = "Error";
    document.getElementById('eth-price').innerText = "Error";
  }
}

// Виклик функції для оновлення цін
fetchPrices();
