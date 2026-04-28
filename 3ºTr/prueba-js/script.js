const iconMenu = document.querySelector(".material-symbols-outlined")
const menuUl = document.querySelector(".contenido")

iconMenu.addEventListener("click", () => {
    menuUl.classList.toggle("mostrar")
})

const section = document.querySelector(".section")
const btnSection = document.querySelector("button")

const listaColores = ["#0b479471", "#C8E6C9", "#f8e8bb", "#E1BEE7", "#add8e663"   ]
let i = 0

btnSection.addEventListener("click", () => {
    section.style.backgroundColor = listaColores[i]
    i++
    if (i >= listaColores.length) {
        i = 0
    }
})
