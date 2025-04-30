var btn = document.querySelector("#send");
logarUsuario = () => {};
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;

  if (email && senha) {
    logarUsuario(email, senha);
  } else {
    alert("Preencha todos os campos!");
  }
});

let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let header = document.querySelector("header");
let logo = document.querySelector("logoHome");
let footer = document.querySelector("footer");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  logo.classList.toggle("dark");
});

// Função para alternar o menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  // Alternar o estado do aria-expanded
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", String(!expanded));
});

// Opcional: permitir abrir o menu com Enter ou Espaço
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    hamburger.click();
  }
});
