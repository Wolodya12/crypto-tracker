document.getElementById("news-btn").addEventListener("click", () => {
  activateSection("news-section");
});

document.getElementById("analysis-btn").addEventListener("click", () => {
  activateSection("analysis-section");
  loadChart();
});

document.getElementById("rates-btn").addEventListener("click", () => {
  activateSection("rates-section");
  loadRates();
});

function activateSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function loadChart() {
  const ctx = document.getElementById("crypto-chart").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'BTC Price',
        data: [30000, 32000, 31000, 33000, 34000],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2
      }]
    }
  });
}

function loadRates() {
  document.getElementById("btc-rate").textContent = "$30,000";
  document.getElementById("eth-rate").textContent = "$2,000";
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crypto Hub</title>
  <link rel="stylesheet" href="styles/style.css">
  <!-- Підключення Chart.js -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <!-- Хедер з логотипом -->
  <header class="header">
    <img src="icons/logo.png" alt="Crypto Hub Logo" class="logo">
    <h1>Crypto Hub</h1>
  </header>

  <!-- Основний контент -->
  <main class="main-content">
    <!-- Опис -->
    <section class="description">
      <p>Ваша платформа для отримання найактуальнішої аналітики та новин про криптовалюти.</p>
    </section>

    <!-- Ключові показники -->
    <section class="key-stats">
      <div class="stat">
        <h3>BTC/USD</h3>
        <p id="btc-price">Loading...</p>
      </div>
      <div class="stat">
        <h3>ETH/USD</h3>
        <p id="eth-price">Loading...</p>
      </div>
    </section>

    <!-- Графік -->
    <section class="chart-section">
      <h3>Курс криптовалют</h3>
      <canvas id="cryptoChart" width="400" height="200"></canvas>
    </section>

    <!-- Швидкий доступ -->
    <section class="quick-access">
      <button class="quick-btn">Новини</button>
      <button class="quick-btn">Аналіз</button>
      <button class="quick-btn">Курси</button>
    </section>
  </main>

  <!-- Нижнє меню -->
  <footer>
    <nav class="bottom-nav">
      <button id="home-btn">
        <img src="icons/home.svg" alt="Головна">
        <span>Головна</span>
      </button>
      <button id="news-btn">
        <img src="icons/news.svg" alt="Новини">
        <span>Новини</span>
      </button>
      <button id="analysis-btn">
        <img src="icons/analysis.svg" alt="Аналіз">
        <span>Аналіз</span>
      </button>
      <button id="rates-btn">
        <img src="icons/rates.svg" alt="Курси">
        <span>Курси</span>
      </button>
      <button id="referral-btn">
        <img src="icons/referral.svg" alt="Реферальна">
        <span>Реферальна</span>
      </button>
    </nav>
  </footer>

  <script src="scripts/main.js"></script>
</body>
</html>
