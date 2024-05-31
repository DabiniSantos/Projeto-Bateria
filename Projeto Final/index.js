// Adiciona um event listener de clique a cada botão
var drumButtons = document.querySelectorAll('.drum');

drumButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        fazerSom(buttonInnerHTML);
        botaoAnimacao(buttonInnerHTML);
    });
});

// Adiciona um event listener de pressionamento de tecla ao documento
document.addEventListener('keydown', function(event) {
    fazerSom(event.key);
    botaoAnimacao(event.key);
});

// Função para tocar o som correspondente
function fazerSom(tecla) {
    // Converte a tecla para minúscula para lidar com maiúsculas e minúsculas
    var teclaMinuscula = tecla.toLowerCase();

    switch (teclaMinuscula) {
        case 'a':
            var crash = new Audio('./assets/sounds/leftCrash.mp3')
            crash.play();
            break;
        case 's':
            var tom1 = new Audio('./assets/sounds/tom1.mp3');
            tom1.play();
            break;
        case 'd':
            var snare = new Audio('./assets/sounds/snare.mp3');
            snare.play();
            break;
        case 'j':
            var tom3 = new Audio('./assets/sounds/tom3.mp3');
            tom3.play();
            break;
        case 'k':
            var tom2 = new Audio('./assets/sounds/tom2.mp3');
            tom2.play();
            break;
        case 'l':
            var kick = new Audio('./assets/sounds/kickbass.mp3');
            kick.play();
            break;
        default:
            console.log(tecla);
    }
}

// Função para adicionar animação ao botão pressionado
function botaoAnimacao(teclaAtual) {
    // Converte a tecla para minúscula para lidar com maiúsculas e minúsculas
    var teclaMinuscula = teclaAtual.toLowerCase();

    var botaoAtivo = document.querySelector('.' + teclaMinuscula);

    if (botaoAtivo) {
        botaoAtivo.classList.add('pressed');
        
        setTimeout(function() {
            botaoAtivo.classList.remove('pressed');
        }, 100);
    }
}

/* 
1) Descobrir como detectar os cliques do mouse nos botões.

dica: existe a possibilidade de criar uma função para detectar todos
ao mesmo tempo.

2) Descobrir como detectar o pressionamento das teclas equivalentes
no teclado

dica: existe a possibilidade de criar uma função para detectar todos
os pressionamentos ao mesmo tempo.

3) Criar uma função chamada fazerSom e nessa função, usando laço "if/else" ou "switch/case" para verificar se o usuário clicou a letra
minúscula ou maiúscula (caps lock ativado). Após a verificação, ao clicar
o som equivalente a tecla tem que ser acionado.

4) Criar uma função chamada botaoAnimacao para usarmos a estilização
"pressed" criada para que quando o usuário clicar no botão ele seja 
estilizado.

*/
