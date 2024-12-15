// Обробник кнопки "Новини"
document.getElementById("news-btn").addEventListener("click", () => {
  activateSection("news-section");
});

// Обробник кнопки "Аналіз"
document.getElementById("analysis-btn").addEventListener("click", () => {
  activateSection("analysis-section");
  loadChart();
});

// Обробник кнопки "Курси"
document.getElementById("rates-btn").addEventListener("click", () => {
  activateSection("rates-section");
  loadRates();
});

// Функція активації секції
function activateSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Функція для завантаження графіку
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
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

// Функція для завантаження курсів
function loadRates() {
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
      document.getElementById("btc-price").textContent = ${data.bitcoin.usd};
      document.getElementById("eth-price").textContent = ${data.ethereum.usd};
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Завантаження початкових даних для ключових показників
function loadInitialStats() {
  fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
      document.getElementById("btc-price").textContent = ${data.bitcoin.usd};
      document.getElementById("eth-price").textContent = ${data.ethereum.usd};
    })
    .catch(error => console.error("Error fetching data:", error));
}

// Виклик функції для завантаження початкових даних
document.addEventListener("DOMContentLoaded", () => {
  loadInitialStats();
});
