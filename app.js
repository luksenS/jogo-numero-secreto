let listaNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTexto ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`
        exibirTexto ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTexto ('p', `O numero secreto é menor que ${chute}`);
    } else {
            exibirTexto ('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas++; 
        limparCampo();
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let qntdNumerosLista = listaNumerosSorteados.length;

    if (qntdNumerosLista == numeroLimite) {
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value =  '';
}

function reinciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}