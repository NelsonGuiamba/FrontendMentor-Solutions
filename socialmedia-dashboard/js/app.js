const check = document.querySelector("input[type='checkbox']");
const body = document.querySelector("body");
theme = localStorage.getItem("theme");

theme && body.classList.toggle("dark");

check.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    localStorage.removeItem("theme");
    body.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  }
});
