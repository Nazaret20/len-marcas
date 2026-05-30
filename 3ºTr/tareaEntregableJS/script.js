/*--------------Cambios globales--------------*/
const iconMenu = document.querySelector(".hamburguesa");
const menuContenido = document.querySelector(".nav-contenido");

iconMenu.addEventListener("click", () => {
  menuContenido.classList.toggle("mostrar");
});

/*-------------Productos----------------*/
const corazones = document.querySelectorAll(".like");
//Necesitamos un foreach porque no es solo un like, sino varios, si no pusieramos foreach solo vería un like, el primero
corazones.forEach((corazon) => {
  corazon.addEventListener("click", () => {
    corazon.classList.toggle("favorito");
  });
});

const btnAnadir = document.querySelectorAll(".btn-anadir");
//Una alerta para que el usuario tenga feedback de que al pulsar, el evento hizo su función
btnAnadir.forEach((boton) => {
  boton.addEventListener("click", () => {
    alert("¡El producto se añadió al carrito!");
  });
});

const suscribir = document.querySelector(".btn-sub");
//En todas las páginas no existe este botón, por tanto da null y así lo protegemos para que no rompa el script
if (suscribir) {
  suscribir.addEventListener("click", () => {
    alert("¡Te has suscrito con éxito!")
  })
}

const imagenes = document.querySelectorAll('.tarjeta img')
    //Efecto mouseover para quitar y poner el "zoom" a la imagen
  imagenes.forEach(imagen => {
    imagen.addEventListener('mouseover', () => {
      imagen.style.transform = 'scale(1.08)'
      imagen.style.transition = 'transform 0.3s ease'
    })

    imagen.addEventListener('mouseout', () => {
      imagen.style.transform = 'scale(1)'
    })
})


/*-----------Subir página------------*/
const btnSubir = document.querySelector(".btn-subir")

btnSubir.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
