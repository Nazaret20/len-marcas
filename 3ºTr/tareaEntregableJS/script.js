/*--------------Cambios globales--------------*/
const iconMenu = document.querySelector(".hamburguesa");
const menuContenido = document.querySelector(".nav-contenido");

iconMenu.addEventListener("click", () => {
    menuContenido.classList.toggle("mostrar");
})