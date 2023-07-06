const themeButton = document.getElementById("theme-button");
const body = document.body;

function updateTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    body.classList.add("dark");
    themeButton.checked = true;
  } else {
    body.classList.remove("dark");
    themeButton.checked = false;
  }
}

if (!localStorage.getItem("theme")) {
  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : undefined;
  localStorage.setItem("theme", preferredTheme);
}

updateTheme();

themeButton.addEventListener("change", function() {
  if (this.checked) {
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } 
  else {
    body.classList.remove("dark");
    localStorage.removeItem("theme");
  }
});

if (body.classList.contains("dark")) themeButton.checked = true;
else themeButton.checked = false;