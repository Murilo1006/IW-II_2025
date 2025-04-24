const imagem = document.getElementById("imagemPrincipal");

document.getElementById("btn1").addEventListener("click", () => {
  imagem.src = "img/corinthians.png";
});
document.getElementById("btn2").addEventListener("click", () => {
  imagem.src = "img/barcelona.png";
});
document.getElementById("btn3").addEventListener("click", () => {
  imagem.src = "img/real_madrid.png";
});