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
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
    const data = await response.json();

    document.getElementById('btc-price').innerText = $${data.bitcoin.usd};
    document.getElementById('eth-price').innerText = $${data.ethereum.usd};
  } catch (error) {
    console.error('Помилка отримання даних', error);
  }
}

updateCryptoPrices();
setInterval(updateCryptoPrices, 60000); // Оновлювати кожну хвилину
