document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Знімаємо активність з усіх секцій
    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    // Додаємо активність до вибраної секції
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).classList.add("active");
  });
});
