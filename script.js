// Variáveis para armazenar os pontos
let vitorias = 0;
let derrotas = 0;

function play(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    // Lógica do Jogo
    if (userChoice === computerChoice) {
        result = `Empate! Ambos escolheram ${userChoice}. 🤝`;
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = `Você ganhou! O computador usou ${computerChoice}. 🎉`;
        vitorias++; // Aumenta vitórias
    } else {
        result = `Você perdeu! O computador usou ${computerChoice}. 😢`;
        derrotas++; // Aumenta derrotas
    }

    // Atualiza o HTML com o texto do resultado
    document.getElementById('result').innerHTML = `<p>${result}</p>`;
    
    // Atualiza o placar na tela
    document.getElementById('wins').innerText = vitorias;
    document.getElementById('losses').innerText = derrotas;
}