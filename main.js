const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

function ativarAba(index) {
  botoes.forEach((botao) => botao.classList.remove("ativo"));
  abas.forEach((aba) => aba.classList.remove("ativo"));

  botoes[index].classList.add("ativo");
  abas[index].classList.add("ativo");
}

botoes.forEach((botao, index) => {
  botao.addEventListener("click", () => ativarAba(index));
});

ativarAba(0);