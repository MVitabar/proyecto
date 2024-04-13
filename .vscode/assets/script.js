function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //  if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  //} else {
  //html.classList.add("light")
  //} basicamente puede ser sustituida por la funcion ('html.classList.toggle)

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    //para cambiar la imagen se usa la misma funcion solo que con otro buscador (const img.querySelector)
  }
}
