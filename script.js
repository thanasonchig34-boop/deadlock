const revealButtons = document.querySelectorAll(".reveal-btn");

revealButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);


    const isOpen = button.getAttribute("aria-expanded") === "true";


    button.setAttribute("aria-expanded", String(!isOpen));
    panel.hidden = isOpen;                       // ถ้าเปิดอยู่ -> ซ่อน, ถ้าซ่อนอยู่ -> แสดง
    button.textContent = isOpen ? "เปิดดูสกิล" : "ซ่อนสกิล";
  });
});


const themeToggle = document.getElementById("themeToggle");
const themeLabel = themeToggle.querySelector(".theme-btn__label");
const root = document.documentElement; // <html>

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";

  if (isLight) {
    root.setAttribute("data-theme", "dark");
    themeLabel.textContent = "โหมดมืด";
    themeToggle.setAttribute("aria-pressed", "false");
  } else {
    root.setAttribute("data-theme", "light");
    themeLabel.textContent = "โหมดสว่าง";
    themeToggle.setAttribute("aria-pressed", "true");
  }
});


const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
