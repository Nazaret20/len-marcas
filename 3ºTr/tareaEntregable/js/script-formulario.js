/*------------Formulario-------------*/
const form = document.querySelector(".form")
const inputEmail = document.getElementById("email")
const mensajeExito = document.querySelector(".mensaje-exito")

if (form) {
  //Para recordar que el evento se coloca al formulario en sí, no al botón
  form.addEventListener("submit", (evento) => {
    //Con esto evitamos que la página envíe y se recargue
    evento.preventDefault()
    mensajeExito.style.color = "rgb(190, 186, 151)"
    mensajeExito.textContent = "¡Formulario enviado correctamente!"
    form.reset()
  })
}