// Ação do botão do NAV
document.querySelector(".menu-opener").addEventListener("click", () => {
  let nav = document.querySelector("header nav");
  // Quando clicar, se tiver a classe opened, o toggle tira ela
  // se não tiver a classe opened, o toggle adiciona ela
  nav.classList.toggle("opened");
});

const toggleSlider = () => {
  // verificando se tem um slider na tela
  const slides = document.querySelectorAll("input[name=slider]");
  // Se não achou nenhum slide, pare a execução.
  if (slides.length === 0) return;

  // Tem slides para serem mexidos? Pegue o que está marcado
  let current = document.querySelector("input[name=slider]:checked");
  // Se não achou nenhum, marca o primeiro
  if (!current) {
    // pega o primeiro slider
    current = document.querySelector("input[name=slider]");
    // e marca ele como checked
    current.setAttribute("checked", true);
  }

  // pega o número dele
  let id = parseInt(current.getAttribute("id").split("-")[1]);
  // Se existir o 2, aumente, se não, volte ao 1
  console.log("antes, id marcado", id);
  if (id + 1 <= slides.length) {
    id++;
  } else {
    id = 1;
  }

  console.log("id marcado", id);

  // Desmarcar todo mundo
  for (let slider of slides) slider.removeAttribute("checked");
  // Marcando só o que quero marcar
  document.querySelector(`#slider-${id}`).setAttribute("checked", true);
};

setInterval(toggleSlider, 5000);
