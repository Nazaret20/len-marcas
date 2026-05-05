const iconMenu = document.querySelector(".menu-hamburguesa");
const menuUl = document.querySelector(".menu");

iconMenu.addEventListener("click", () => {
    menuUl.classList.toggle("mostrar");
})
