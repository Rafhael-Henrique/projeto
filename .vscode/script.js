function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const p = document.querySelector("#profile p")

  //pegando a tag img
  const img = document.querySelector("#profile img")
  const link = document.querySelector("ul li link1 a:hover")

  if (html.classList.contains("light")) {
    //setando imagem no light mode
    img.setAttribute("src", "/assets/Screenshot_1.jpg")
    p.innerText = "Gostosa da Mia Piper"
    link.setAttribute("href", "https://mail.google.com/")
  } else {
    // mantendo a imagem
    img.setAttribute("src", "/assets/73870113_041_ff57.jpg")
    p.innerText = "Gostosa da Amber"
    link.setAttribute("href", "https://google.com")
  }
}
