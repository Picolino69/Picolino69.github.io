// Função para exibir uma mensagem no console
document.addEventListener("DOMContentLoaded", function () {
    console.log("Site carregado com sucesso! Bem-vindo ao portfólio de Ronaldo Lima Nascimento.");
});

// Função para animar o título principal
const headerTitle = document.querySelector("header h1");
headerTitle.style.transition = "color 1s ease-in-out";

setTimeout(() => {
    headerTitle.style.color = "#FF0000"; // Altera a cor do título após 1 segundo
}, 1000);