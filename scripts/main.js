// Обробник кнопки "Новини"
document.getElementById("news-btn").addEventListener("click", () => {
  activateSection("news-section");
});

// Обробник кнопки "Аналіз"
document.getElementById("analysis-btn").addEventListener("click", () => {
  activateSection("analysis-section");
});

// Обробник кнопки "Курси"
document.getElementById("rates-btn").addEventListener("click", () => {
  activateSection("rates-section");
});

// Функція активації секції
function activateSection(id) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("active");
  });
  const section = document.getElementById(id);
  if (section) {
    section.classList.add("active");
  }
}

// Початкові курси (тимчасові дані)
document.getElementById("btc-price").textContent = "$30,000";
document.getElementById("eth-price").textContent = "$2,000";
