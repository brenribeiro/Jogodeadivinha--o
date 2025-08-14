// Gerar número aleatório entre 1 e 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Definir tentativas máximas
const tentativasMaximas = 10;
let tentativasRestantes = tentativasMaximas;

// Selecionar elementos do DOM
const inputPalpite = document.getElementById('palpite');
const btnChutar = document.getElementById('chutarBtn');
const mensagem = document.getElementById('mensagem');
const tentativasDisplay = document.getElementById('tentativasRestantes');

// Inicializar tentativas restantes
tentativasDisplay.textContent = `Tentativas restantes: ${tentativasRestantes}`;

// Função ao clicar no botão "Chutar"
btnChutar.addEventListener('click', () => {
    let palpite = parseInt(inputPalpite.value);

    // Validar palpite
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        mensagem.textContent = 'Digite um número válido entre 1 e 100.';
        return;
    }

    tentativasRestantes--;

    // Comparar palpite com o número secreto
    if (palpite === numeroSecreto) {
        mensagem.textContent = '🎉 Você acertou!';
        btnChutar.disabled = true; // Desabilitar botão após vitória
    } else if (palpite < numeroSecreto) {
        mensagem.textContent = 'O número secreto é maior.';
    } else {
        mensagem.textContent = 'O número secreto é menor.';
    }

    // Atualizar tentativas restantes
    tentativasDisplay.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    // Verificar se acabou as tentativas
    if (tentativasRestantes === 0 && palpite !== numeroSecreto) {
        mensagem.textContent = `😢 Você perdeu! O número secreto era ${numeroSecreto}.`;
        btnChutar.disabled = true;
    }

    // Limpar input
    inputPalpite.value = '';
    inputPalpite.focus();
});
