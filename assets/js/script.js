// Ação do botão do NAV
document.querySelector(".menu-opener").addEventListener("click", () => {
  let nav = document.querySelector("header nav");
  // Quando clicar, se tiver a classe opened, o toggle tira ela
  // se não tiver a classe opened, o toggle adiciona ela
  nav.classList.toggle("opened");
});
