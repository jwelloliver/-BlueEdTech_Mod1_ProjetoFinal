var prompt = require('prompt-sync')();

// Inicio do Jogo
var cont = 0;
const jogador = {
    nome: 'Gale',
    statusJogador: '', 
};

console.log('\n Após um longo dia, Gale chega em casa, em meio uma tempestade. Como de costume vai tomar seu banho, ao terminar o banho acaba a energia, então ele...\n');
console.log(' Desejar ir Dormir ou Acender Uma lanterna ?\n ')
jogador.statusJogador = prompt(' Digite entre opções Dormir Ou laterna: ').toUpperCase();

while (jogador.statusJogador != 'DORMIR' && jogador.statusJogador != 'LANTERNA') {
    
    console.log('\n Errada, escolha entre opçoes abaixo:')
    
    jogador.statusJogador = prompt(' Digite entre opções Dormir Ou laterna: ').toUpperCase();
}

while (jogador.statusJogador === 'DORMIR') {

    console.clear();// Função para limpar terminal. 

    console.log('\n Gale resolve então deitar para descansar, pois seus dias costumam ser longos e ele tem uma rotina a cumprir.');
    
    break;
}

while (jogador.statusJogador === 'LANTERNA') {
    
    console.clear();// Função para limpar terminal.

    console.log('\n Ao acender a lanterna: A lanterna é mágica e levou ele há um Universo Paralelo, no qual existe uma missão a ser cumprida, o que ele deve fazer? ');
    
    console.log('\n Desejar realizar a (S) Missao ou (N) Desligar a lanterna?');
    
    jogador.statusJogador = prompt('\n Escolha entre Opçao S ou N : ').toUpperCase();

    while (jogador.statusJogador === 'S') {

        console.clear();// Função para limpar terminal. 
        
    }

    while (jogador.statusJogador === 'N') {

        console.clear();// Função para limpar terminal. 
        
    }

}
