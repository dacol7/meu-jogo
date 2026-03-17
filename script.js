function play(userChoice) {
    const choices = ['pedra', 'papel', 'tesoura'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "Empate! 🤝";
    } else if (
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = `Você ganhou! O computador escolheu ${computerChoice}. 🎉`;
    } else {
        result = `Você perdeu! O computador escolheu ${computerChoice}. 😢`;
    }

    document.getElementById('result').innerHTML = `<p>${result}</p>`;
}