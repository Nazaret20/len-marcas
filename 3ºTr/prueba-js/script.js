const iconMenu = document.querySelector(".material-symbols-outlined")
const menuUl = document.querySelector(".contenido")

iconMenu.addEventListener("click", () => {
    menuUl.classList.toggle("mostrar")
})