const btnMobile = document.querySelector("#btn-mobile");
const menuItems = document.querySelectorAll("#menu a[href^='#']");
const nav = document.querySelector("#nav");
const titulo = document.querySelector("h1");

const handleToggleClick = () => {
  nav.classList.toggle("active");
};

const typeWrite = (elemento) => {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, index) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * index);
  });
};

const scrollToIdOnClick = (event) => {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to - 100,
    behavior: "smooth",
  });
  nav.classList.toggle("active");
};

typeWrite(titulo);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
btnMobile.addEventListener("click", handleToggleClick);
