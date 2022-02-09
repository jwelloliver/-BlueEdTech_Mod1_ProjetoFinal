var prompt = require('prompt-sync')();

// Inicio do Jogo
let cont = 0;
const jogador = {
    nome: 'Gale',
    local: 'Casa',
    statusJogador: '', 
};

console.log('Após um longo dia, Gale chega em casa, em meio uma tempestade. Como de costume vai tomar seu banho, ao terminar o banho acaba a energia, então ele...\n');
console.log('Desejar ir Dormir ou Acender Uma lanterna ?\n ')
jogador.statusJogador = prompt('Digite entre opções Dormir Ou laterna: ').toUpperCase();

while (jogador.statusJogador === 'DORMIR') {
    console.log('\nGale resolve então deitar para descansar, pois seus dias costumam ser longos e ele tem uma rotina a cumprir.');

    cont++;
}
while (jogador.statusJogador === 'LANTERNA') {
    console.log('\n Ao acender a lanterna: A lanterna é mágica e levou ele há um Universo Paralelo, no qual existe uma missão a ser cumprida, o que ele deve fazer? ');

    cont++;
}

