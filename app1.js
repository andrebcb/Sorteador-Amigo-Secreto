let jogadores = [];
let sorteio = [];
let jogadorAtualIndex = 0; // Índice do jogador atual
let pares = new Map();

function adicionarAmigo() {
    const amigos = document.getElementById('amigo');
    const nome = amigos.value.trim();
    if (nome !== '') {
        jogadores.push(nome);
        atualizarLista();
        amigos.value = '';
    } else {
        alert('Digite um nome válido');
    }
}

function atualizarLista() {
    const nomes = document.getElementById('resultado');
    nomes.innerHTML = '';
    jogadores.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        nomes.appendChild(li);
    });
}

function escolherJogadorInicial() {
    if (jogadores.length > 0) {
        document.querySelector('h2').textContent = `O primeiro a sortear é: ${jogadores[jogadorAtualIndex]}`;
    }
}

function sortearAmigo() {
    if (jogadores.length < 2) {
        document.querySelector('h2').textContent = 'Adicione mais amigos para sortear';
    } else {
        document.querySelector('h1').textContent = 'Vamos iniciar nosso sorteio!';
        sumirComElementos();
        sortearPares();
        escolherJogadorInicial();
        mostrarBotaoRevelar();
    }
}

function sumirComElementos() {
    const elementos = document.querySelectorAll('.input-wrapper, .button-draw, .result-list');
    elementos.forEach(elemento => {
        elemento.classList.remove('visible');
        elemento.classList.add('hidden');
    });

    setTimeout(() => {
        elementos.forEach(elemento => {
            elemento.style.display = 'none';
        });
    }, 1000);
}

function mostrarBotaoRevelar() {
    const btnRevelar = document.getElementById('containerRevelar');
    btnRevelar.style.display = 'block';
}

function sortearPares() {
    let disponiveis = [...jogadores]; // Clona a lista de jogadores para manipulação

    jogadores.forEach(jogadorAtual => {
        let opcoes = disponiveis.filter(j => j !== jogadorAtual);
        if (opcoes.length === 0) return;

        let sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
        pares.set(jogadorAtual, sorteado);
        disponiveis = disponiveis.filter(j => j !== sorteado);
    });
}

function revelarTexto() {
    const jogadorAtual = jogadores[jogadorAtualIndex];
    const sorteado = pares.get(jogadorAtual);

    if (sorteado) {
        document.querySelector('h2').textContent = `Agora é a vez de ${jogadorAtual} sortear!`;
        const textoRevelado = document.getElementById('textoRevelado');
        textoRevelado.innerHTML = `<h4>${jogadorAtual} sorteou: ${sorteado}</h4>`;
        textoRevelado.style.display = 'block';
        iniciarConfetes();
        mostrarBotaoProximo();
    }
}

function mostrarBotaoProximo() {
    const btnProximo = document.getElementById('containerProximo');
    btnProximo.style.display = 'block';
}

function revelarProximoJogar() {
    jogadorAtualIndex++; // Avança para o próximo jogador
    if (jogadorAtualIndex < jogadores.length) {
        const jogadorAtual = jogadores[jogadorAtualIndex];
        document.querySelector('h2').textContent = `Agora é a vez de ${jogadorAtual} sortear!`;

        const textoRevelado = document.getElementById('textoRevelado');
        textoRevelado.style.display = 'none';

        const btnProximo = document.getElementById('containerProximo');
        btnProximo.style.display = 'none';
    } else {
        document.querySelector('h2').textContent = 'Sorteio concluído!';
        const btnProximo = document.getElementById('containerProximo');
        btnProximo.style.display = 'none';

        // Mostrar o botão "Novo Sorteio"
        const btnNovoSorteio = document.getElementById('containerNovoSorteio');
        btnNovoSorteio.style.display = 'block';
    }
}

function novoSorteio() {
    // Recarregar a página para reiniciar o sorteio
    location.reload();
}
