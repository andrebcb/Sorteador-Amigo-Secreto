//variavel global que armazena a lista de amigos

let amigos = [];
//função que adiciona um amigo na lista
function adicionarAmigo() {
const input = document.getElementById('amigo');
const nome = input.value.trim();
if(nome !== '') {
    amigos.push(nome);
    atualizarLista();
    input.value = ""; 
} else {
    alert('Digite um nome válido');
}

}
function atualizarLista() {
    const nomes = document.getElementById('listaAmigos');
    nomes.innerHTML = '';
    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        nomes.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length < 2) {
        document.getElementById('resultado').textContent = 'Adicione mais amigos para sortear';
        return;
    } else {
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').textContent = `O amigo sorteado é: ${sorteado}`;
        iniciarConfetes();
        
    }
}

