let vitorias = 0;
let derrotas = 0;
let premioConcedido = false; // 

function play(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (userChoice === computerChoice) {
        result = `Empate! Ambos escolheram ${userChoice}. 🤝`;
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = `Você ganhou! O computador usou ${computerChoice}. 🎉`;
        vitorias++;
    } else {
        result = `Você perdeu! O computador usou ${computerChoice}. 😢`;
        derrotas++;
    }
    
    document.getElementById('result').innerHTML = `<p>${result}</p>`;
    document.getElementById('wins').innerText = vitorias;
    document.getElementById('losses').innerText = derrotas;


    if (vitorias === 10 && !premioConcedido) {
        alert("🏆 PARABÉNS! Você conseguiu a marca de 10 vitórias contra a CPU! Você é um mestre do Jokenpô!");
        
        document.getElementById('wins').style.color = "#FFD700";
        document.getElementById('wins').style.textShadow = "0 0 10px #FFD700";
        
        premioConcedido = true; 
    }
}
