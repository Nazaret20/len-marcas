const iconMenu = document.querySelector(".material-symbols-outlined")
const menuUl = document.querySelector(".contenido")

iconMenu.addEventListener("click", () => {
    menuUl.classList.toggle("mostrar")
})

const section = document.querySelector(".section")
const btnSection = document.querySelector("button")

btnSection.addEventListener("click", () => {
    section.classList.toggle("nuevo-fondo")
})
