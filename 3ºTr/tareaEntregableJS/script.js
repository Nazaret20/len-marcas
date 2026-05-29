/*--------------Cambios globales--------------*/
const iconMenu = document.querySelector(".hamburguesa");
const menuContenido = document.querySelector(".nav-contenido");

iconMenu.addEventListener("click", () => {
    menuContenido.classList.toggle("mostrar");
})

// Selecciona todos los corazones de la tienda
const corazones = document.querySelectorAll('.like');


  corazon.addEventListener('click', () => {
    corazon.classList.toggle('favorito');
  });
