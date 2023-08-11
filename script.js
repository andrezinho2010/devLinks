function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a Tag img
  
  const img = document.querySelector("#profile img")
  
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light.
    img.setAttribute("src", "./assets/avatar-light.png")
     img.setAttribute("alt", "foto do epicks sorrindo com terno com fundo cinza")
    // se tiver light mode, adicionar uma descrição diferente da dark mode.
  } else {
    // set tiver sem light mode, manter a imagem normal.
    img.setAttribute("src", "./assets/avatar-dark.png")
     img.setAttribute("alt", "Foto De Um Cara De Terno Com Um ? Na Cabeça.")
  }
}
