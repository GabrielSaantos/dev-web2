let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let header = document.querySelector("header");
let logo = document.querySelector("logoHome");
let footer = document.querySelector("footer");
let text = document.querySelector("text");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  logo.classList.toggle("dark");
  text.classList.toggle("dark");
  footer.classList.toggle("dark");
});
