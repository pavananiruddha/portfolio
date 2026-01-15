// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme handling
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

function setTheme(theme) {
  if (theme === "light") {
    root.setAttribute("data-theme", "light");
    icon.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    icon.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});

// Resume placeholder button
document.getElementById("resumeBtn").addEventListener("click", (e) => {
  e.preventDefault();
  alert("Resume not uploaded yet. Add resume.pdf to your repo later.");
});

