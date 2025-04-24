// Seleciona os elementos
const lampada = document.getElementById("lampada");
const btnLigar = document.getElementById("ligar");
const btnDesligar = document.getElementById("desligar");

const statusLampada = document.createElement("p");
document.body.appendChild(statusLampada);

// Funções para ligar e desligar a lâmpada
function ligarLampada() {
  if (!estaLigada()) {
    lampada.src = "img/lampliga.jpeg";
    lampada.alt = "Lâmpada Ligada";
    atualizarEstado("ligada");
  }
}

function desligarLampada() {
  if (estaLigada()) {
    lampada.src = "img/lampdesl.jpeg";
    lampada.alt = "Lâmpada Desligada";
    atualizarEstado("desligada");
  }
}

function estaLigada() {
  return lampada.src.includes("lampliga.jpeg");
}

function atualizarEstado(estado) {
  statusLampada.innerText = `A lâmpada está ${estado}.`;
  btnLigar.disabled = estado === "ligada";
  btnDesligar.disabled = estado === "desligada";
}

// Adiciona os eventos aos botões
btnLigar.addEventListener("click", ligarLampada);
btnDesligar.addEventListener("click", desligarLampada);

lampada.addEventListener("mouseover", ligarLampada);
lampada.addEventListener("mouseout", desligarLampada);

atualizarEstado("desligada");