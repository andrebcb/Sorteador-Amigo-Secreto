let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome !== '') {
        amigos.push(nome);
        atualizarLista();
        input.value = ''; // Limpa o campo de texto
        input.focus();
    } else {
        alert('Por favor, insira um nome válido.');
    }
}

// Atualiza a lista de amigos com animação
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((nome, index) => {
        const li = document.createElement('li');
        li.textContent = nome;
        li.style.setProperty('--index', index); // Define a variável de delay para a animação
        lista.appendChild(li);
    });
}

// Sorteia um amigo
function sortearAmigo() {
    if (amigos.length < 2) {
        document.getElementById('resultado').textContent =
            'Adicione pelo menos 2 amigos para sortear.';
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById('resultado').textContent = `O amigo sorteado é: ${sorteado}`;
    iniciarConfetes();
}

// Efeito de confetes ao sortear
function iniciarConfetes() {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            startVelocity: 30,
            spread: 360,
            origin: { x: Math.random(), y: Math.random() - 0.2 },
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}
