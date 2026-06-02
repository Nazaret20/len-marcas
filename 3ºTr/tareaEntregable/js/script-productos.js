/*-------------Productos----------------*/
const corazones = document.querySelectorAll(".like")
//Necesitamos un foreach porque no es solo un like, sino varios, si no pusieramos foreach solo vería un like, el primero
corazones.forEach((corazon) => {
  corazon.addEventListener("click", () => {
    corazon.classList.toggle("favorito")
    
    //Con el if podemos hacer el intercambio de los dos svg, sería como usar un toggle
    if (corazon.classList.contains("favorito")) {
      corazon.src = "./img/fav-full.svg"
    } else {
      corazon.src = "./img/fav.svg"
    }
  })

})

const btnAnadir = document.querySelectorAll(".btn-anadir")
//Una alerta para que el usuario tenga feedback de que al pulsar, el evento hizo su función
btnAnadir.forEach((boton) => {
  boton.addEventListener("click", () => {
    alert("¡El producto se añadió al carrito!")
  })
})

const suscribir = document.querySelector(".btn-sub")
//En todas las páginas no existe este botón, por tanto da null y así lo protegemos para que no rompa el script
if (suscribir) {
  suscribir.addEventListener("click", () => {
    alert("¡Te has suscrito con éxito!")
  })
}
