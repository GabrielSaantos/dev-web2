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

function trocarLogoPorTema() {
  const logo = document.getElementById("logo");
  const temaEscuroAtivo = document.documentElement.classList.contains("dark");

  if (temaEscuroAtivo) {
    logo.src = "/DEV_WEB/assets/LOGOFITNESSbranca.png"; // Caminho para a logo clara
  } else {
    logo.src = "/DEV_WEB/assets/LOGOFITSTRENGTH.png"; // Caminho para a logo escura
  }
}

// Executa ao carregar a página
trocarLogoPorTema();

// Opcional: escuta mudanças no tema, útil se o usuário puder trocar dinamicamente
const observer = new MutationObserver(trocarLogoPorTema);
observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["class"],
});
