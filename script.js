let MUDAR_NOME = false;

if (MUDAR_NOME) {
    document.addEventListener("DOMContentLoaded", function () {
    let nome = document.querySelector(".titulo h1");
    nome.innerText = "Izadora Andrade";
    console.log(nome.innerText);
  });
}