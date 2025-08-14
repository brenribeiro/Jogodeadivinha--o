let numeroSecreto;
const tentativasMaximas = 10;
let tentativasRestantes;

const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('chutarBtn');
const btnReiniciar = document.getElementById('reiniciarBtn');
const mensagem = document.getElementById('mensagem');
const tentativasDisplay = document.getElementById('tentativasRestantes');

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativasRestantes = tentativasMaximas;
    mensagem.textContent = '';
    tentativasDisplay.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    btnChutar.disabled = false;
    inputPalpite.value = '';
    inputPalpite.focus();
    document.body.style.backgroundColor = '#121212';
}

// Função para atualizar cor de fundo dependendo da proximidade
function atualizarCor(palpite) {
    let diferenca = Math.abs(palpite - numeroSecreto);

    if(diferenca === 0) {
        document.body.style.backgroundColor = '#00ff00'; // verde: acerto
    } else if(diferenca <= 5) {
        document.body.style.backgroundColor = '#ff4500'; // vermelho forte: muito próximo
    } else if(diferenca <= 15) {
        document.body.style.backgroundColor = '#ffa500'; // laranja: perto
    } else {
        document.body.style.backgroundColor = '#1e1e1e'; // fundo normal
    }
}

btnChutar.addEventListener('click', () => {
    let palpite = parseInt(inputPalpite.value);

    if(isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Digite um número válido entre 1 e 100.';
        return;
    }

    tentativasRestantes--;
    atualizarCor(palpite);

    if(palpite === numeroSecreto) {
        mensagem.textContent = '🎉 Você acertou!';
        btnChutar.disabled = true;
    } else if(palpite < numeroSecreto) {
        mensagem.textContent = 'O número secreto é maior.';
    } else {
        mensagem.textContent = 'O número secreto é menor.';
    }

    tentativasDisplay.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if(tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
        btnChutar.disabled = true;
        document.body.style.backgroundColor = '#ff0000'; // vermelho forte
    }

    inputPalpite.value = '';
    inputPalpite.focus();
});

btnReiniciar.addEventListener('click', iniciarJogo);

// Iniciar jogo ao carregar página
iniciarJogo();
