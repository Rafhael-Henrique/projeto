function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegando a tag img
  const img = document.querySelector("#profile img")
  const link = document.querySelector("ul li link1 a:hover")

  if (html.classList.contains("light")) {
    //setando imagem no light mode
    img.setAttribute("src", "/assets/647430fe-64d8-4135-91c4-721c449c13d3.jpg")
    link.setAttribute("href", "https://mail.google.com/")
  } else {
    // mantendo a imagem
    img.setAttribute("src", "/assets/647430fe-64d8-4135-91c4-721c449c13d3.jpg")
    link.setAttribute("href", "https://google.com")
  }
}
