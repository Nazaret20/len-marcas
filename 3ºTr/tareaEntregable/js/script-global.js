/*--------------Cambios globales--------------*/
const iconMenu = document.querySelector(".hamburguesa")
const menuContenido = document.querySelector(".nav-contenido")

iconMenu.addEventListener("click", () => {
  menuContenido.classList.toggle("mostrar")
})

/*-----------Subir página------------*/
const btnSubir = document.querySelector(".btn-subir")
//Evento para ventana que sube a top 0
btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
