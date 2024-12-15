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
