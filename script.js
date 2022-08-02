const btnMobile = document.querySelector("#btn-mobile");
const menuItems = document.querySelectorAll("#menu a[href^='#']");
const nav = document.querySelector("#nav");

const handleToggleClick = () => {
  nav.classList.toggle("active");
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

console.log([...menuItems]);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});
btnMobile.addEventListener("click", handleToggleClick);
