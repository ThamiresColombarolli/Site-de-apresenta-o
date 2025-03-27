document.addEventListener("DOMContentLoaded", function () {
     // mensagem de boas vindas dinamica 
     const nome ="Thamires";
     alert('Bem vindo ao meu portfolio, ${nome}!');

    // Adicionando o modo escuro
    const botaoDarkMode = document.createElement("button");
    botaoDarkMode.innerText = "🌙 Modo Escuro";
    botaoDarkMode.style.position = "fixed";
    botaoDarkMode.style.top = "10px";
    botaoDarkMode.style.right = "10px";
    botaoDarkMode.style.padding = "10px";
    botaoDarkMode.style.cursor = "pointer";
    botaoDarkMode.style.border ="pointer";
    botaoDarkMode.style.background = "#333";
    botaoDarkMode.style.color = "white";
    botaoDarkMode.style.borderRadius = "5px";
    
    document.body.appendChild(botaoDarkMode);

    botaoDarkMode.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

// Alterando o texto do botão dinamicamente
if (document.body.classList.contains("dark-mode")) {
    botaoDarkMode.innerText = "☀️ Modo Claro";
    botaoDarkMode.style.background = "white";
    botaoDarkMode.style.color = "black";
} else {
    botaoDarkMode.innerText = "🌙 Modo Escuro";
    botaoDarkMode.style.background = "#333";
    botaoDarkMode.style.color = "white";
}

  });
});

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

