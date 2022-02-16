var prompt = require("prompt-sync")();

// Declaração do personagem como objeto onde se encontra os valores correspondente ao status do mesmo.

const personagem = {
  Nome: "Michael",
  Sede: 100,
  Fome: 100,
  Vida: 100,
};
// Lista onde se encotra os valores da periodo que se passa o jogo.
const periodos = [
  "PRIMEIRA-SEMANA",
  "SEGUNDA-SEMANA",
  "TERCEIRA-SEMANA",
  "INICIO DO JOGO",
];
// uma Arrow functions para criar uma pausa no jogo.
const pausa = () => prompt(`Precione ENTER para continuar!`);

// uma Arrow functions para quando usuario digitar a escolha incorreta, imprimir na tela.
const escolhaErrada = () => console.log(`Você digitou uma opção incorreta!`);

// Função para impressão na tela em forma de tabela do status do jogador.
function statusAtuais(michael) {
  console.log();
  console.log(`STATUS ATUAIS:`);
  console.table(michael);
}
// Variavel para iniciar o jogo no laço while.
let novoJogo = 0;

//Função para fim de Jogo, caso usuario escolha o caminho que leve a essa condição.
function fimJogo() {
  // Variavel para receber escolha do usuario, caso for game over.
  let escolha = prompt(
    `Deseja voltar para o começo da ${periodos[i]}? SIM ou NAO: `
  )
    .toUpperCase()
    .trim();
  console.clear();// limpando o terminal, para melhor visibilidade.

// Validação da escolha do usuario entre 'SIM' e 'NAO'.
  while (escolha != "SIM" && escolha != "NAO") {
    escolhaErrada();// chamando a função escolhaErrada
    escolha = prompt(`Deseja jogar novamente? SIM ou NAO: `)// retornando ao usuario novamente a opçao de escolha.
      .toUpperCase()
      .trim();
    console.clear();// limpando o terminal, para melhor visibilidade.
  }
  // Condição para reniciar o jogo novamente.
  if (escolha == "NAO") {
    novoJogo = 1;
  }
}

// Função para inicio do jogo, com informaçoes de como sera o jogo.
function introducao() {
  console.clear();// limpando o terminal, para melhor visibilidade.
  console.log(`O jogo se chama SOBREVIVA!
Primeiramente vamos lhe apresentar o personagem e seus status:`);
  statusAtuais(personagem);// Impressão do status do personagem de inicio do jogo, usando uma função e que imprimir na tela objeto.
  console.log(`Se qualquer um dos STATUS de Michael chegar a 0 ele MORRE!`);
  pausa();// chamando função pausa
  console.clear();// limpando o terminal, para melhor visibilidade.
}

// Função para 1º semana, periodo inicial do jogo. 
function primeiraParte() {
  console.log(`Nossa história começa com Michael acordando em uma ilha completamente desconhecida.
Michael olha para os lados e encontra algumas pedras afidas, tiras de couro e pedaços de madeira. 
O que lhe dá a ideia de criar um machado improvisado para ajudar nesse início de jornada.
Você cria o machado ou segue andando sem rumo em busca de algum alimento?`); //Introdução de inicio

  let primeiraEscolha = prompt(`Escolha entre MACHADO ou ALIMENTO: `) // Variavel que Solicita opçao de Escolha do usuario.
    .toUpperCase()
    .trim();
  console.clear();// limpando o terminal, para melhor visibilidade.

// Validação da escolha do usuario entre 'MACHADO' e 'ALIMENTO'.
  while (primeiraEscolha != "MACHADO" && primeiraEscolha != "ALIMENTO") {
    escolhaErrada();// chamando a função escolhaErrada
    primeiraEscolha = prompt(`Escolha entre MACHADO ou ALIMENTO: `)
      .toUpperCase()
      .trim();
    console.clear();// limpando o terminal, para melhor visibilidade.
  }
// Condição caso escolha do usuario conrresponda a opçao escolhida.
  if (primeiraEscolha == "ALIMENTO") { // se a condição for igual a 'ALIMENTO', sera executado o codigo abaixo.
    console.log(
      `Infelizmente sua busca por alimento não da muito certo e Michael acaba tropeçando e caindo em um imenso buraco.`
    );
    personagem.Vida = 0; // Armazenando um novo valor dentro do objeto personagem chave vida, no caso zerando a vida do personagem.  
    statusAtuais(personagem); // Impressão do status do personagem.
    console.log(`Michael morre devido ao seu enorme tombo!`);
    fimJogo(); // chamando a função fimJogo
  } else { // se a condição for diferente de 'ALIMENTO', sera executado o codigo abaixo.
    i++;
    personagem.Sede = 40; // Armazenando um novo valor dentro do objeto personagem chave sede, no caso diminuindo seu status Sede.
    personagem.Fome = 50; // Armazenando um novo valor dentro do objeto personagem chave fome, no caso diminuindo seu status de Fome.
    console.log(
      `Enquanto fazia seu machado Michael sente seu estomago roncar e sua garganta secar.\nMas já com algum equipamento em mão decide continuar sua jornada`
    );
    statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
    pausa();// chamando função pausa
    console.clear();// limpando o terminal, para melhor visibilidade.
    console.log(
      `Após quase uma semana na ilha, Michael ainda sofre muito para poder sobreviver.\nEle encontra algumas frutas e consegue pegar alguns animais com seu machado.\nMas a falta de água ainda era um grande problema.`
    );
    personagem.Fome = 100; // Armazenando um novo valor dentro do objeto personagem chave Fome, no caso aumentando seu status.
    personagem.Sede = 25; // Armazenando um novo valor dentro do objeto personagem chave Sede, no caso diminuindo seu status.
    personagem.Vida = 100; // Armazenando um novo valor dentro do objeto personagem chave Vida, no caso Aumentando seu status.
    statusAtuais(personagem);
    pausa();// chamando função pausa
    console.clear();// limpando o terminal, para melhor visibilidade.
  }
} // finalizando função primeiraParte

// Função para 2º semana.
function segundaParte() {
  console.log(`Michael decide primeiro resolver o seu problema com a água.`);
  personagem.Sede = 15; // Armazenando um novo valor dentro do objeto personagem chave Sede, no caso diminuindo seu status.
  statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
  pausa();// chamando função pausa
  console.clear();// limpando o terminal, para melhor visibilidade.

  console.log(
    `Michael observa mais a frente uma floresta mais densa onde a probablidade de encontrar água potável seria maior.\nDeseja se aventurar pela floresta ou continuar sua busca no local onde está? `
  );
  // Variavel que Solicita opçao de Escolha do usuario.
  let segundaEscolha = prompt(
    `Digite SIM se deseja se aventurar pela floresta, ou NAO para ficar no lugar onde está: `
  )
    .toUpperCase()
    .trim();
  console.clear();// limpando o terminal, para melhor visibilidade.
  // Validação da escolha do usuario entre 'SIM' e 'NAO'
  while (segundaEscolha != "SIM" && segundaEscolha != "NAO") {
    escolhaErrada(); // chamando função escolhaErrada
    segundaEscolha = prompt(
      `Digite SIM se deseja se aventurar pela floresta, ou NAO para ficar no lugar onde está: `
    )
      .toUpperCase()
      .trim();
    console.clear();// limpando o terminal, para melhor visibilidade.
  }
  // Condição caso escolha do usuario conrresponda a opçao escolhida, sera executado o codigo abaixo.
  if (segundaEscolha == "NAO") {
    console.log(
      `Michael fica alguns dias rodando pelo mesmo lugar em busca de água potável mas infelizmente sua busca se prova inútil.\nEle não consegue suportar forte calor e acaba desmaiando fortemente desidratado`
    );
    personagem.Sede = 0; // Armazenando um novo valor dentro do objeto personagem chave Sede, no caso zerando seu status.
    statusAtuais(personagem); // Impressão do status do personagem, com novos valores.
    console.log(
      `Michael não resiste a falta de água e acaba morrendo por desidratação!`
    );
    fimJogo();// chamando a função fimJogo
  } else { // se a condição for diferente de 'NAO', sera executado o codigo abaixo.
    i++;
    console.log(
      `Ao se aventurar pela floresta houveram alguns contratempos como arranhões e torções aparentemente nada tão ruim.\nMas ele tira a sorte grande encontrando uma grande nascente por ali.`
    );
    personagem.Sede = 100; // Armazenando um novo valor dentro do objeto personagem chave Sede, no caso Aumentando seu status.
    statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
    pausa();// chamando função pausa
    console.clear();// limpando o terminal, para melhor visibilidade.
  }
}// finalizando função segundaParte

// Função para 3º semana
function terceiraParte() {
  console.log(
    `Quando Michael acha que está tudo resolvido ele começa a se sentir mal, provavelmente por alguma intoxicação.`
  );
  personagem.Vida = 65;// Armazenando um novo valor dentro do objeto personagem chave Vida, no caso diminuindo seu status.
  statusAtuais(personagem); // Impressão do status do personagem, com novos valores.
  pausa();// chamando função pausa
  console.clear();// limpando o terminal, para melhor visibilidade.
  console.log(
    `Michael decide que precisa contruir rapidamente um lugar para se recuperar antes que a sua situação piore.\nUsando novas ferramentas que criou ao longo desses dias ele rapidamente constrói um abrigo, mas a sua condição só piorava.`
  );
  personagem.Vida = 40; // Armazenando um novo valor dentro do objeto personagem chave Vida, no caso diminuindo seu status.
  statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
  pausa();// chamando função pausa
  console.clear();// limpando o terminal, para melhor visibilidade.
  console.log(
    `Michael estava muito cansado e não sabia se era melhor sair em busca de alguma erva medicinal ou simplesmente descansava para se recuperar.`
  );
  
  // Variavel que Solicita opçao de Escolha do usuario.
  let terceiraEscolha = prompt(`Escolha entre, BUSCAR ou DESCANSAR: `)
    .toUpperCase()
    .trim();
  console.clear();// limpando o terminal, para melhor visibilidade.

  // Validação da escolha do usuario entre 'BUSCAR' e 'DESCANSAR'
  while (terceiraEscolha != "BUSCAR" && terceiraEscolha != "DESCANSAR") {
    escolhaErrada();// chmando a função escolhaErrada
    terceiraEscolha = prompt(`Escolha entre, BUSCAR ou DESCANSAR: `)
      .toUpperCase()
      .trim();
    console.clear();// limpando o terminal, para melhor visibilidade.
  }

  // Condição caso escolha do usuario conrresponda a opçao escolhida, sera executado o codigo abaixo.
  if (terceiraEscolha == "BUSCAR") {
    console.log(
      `Por mais que Michael tivesse algum conhecimento sobre ervas medicinais em um livro em que havia lido,\nele não consegue encontrar nenhuma em sua cansativa busca e desmaia de exaustão!`
    );
    personagem.Vida = 0;// Armazenando um novo valor dentro do objeto personagem chave Vida, no caso zerando seu status.
    statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
    console.log(`Michael morre devido ao seu desgaste e intoxicação!`);
    fimJogo(); // chamando função fimJogo.
  } else {// se a condição for diferente de 'BUSCAR', sera executado o codigo abaixo.
    i++;
    console.log(
      `As vezes a melhor opção é realmente só descansar e esperar. \nApós 2 dias Michael acorda e sente completamente renovado!`
    );
    personagem.Vida = 100;// Armazenando um novo valor dentro do objeto personagem chave Vida, no caso aumentando seu status.
    statusAtuais(personagem);// Impressão do status do personagem, com novos valores.
    pausa();// chamando função pausa
  }
}// finalizando função terceiraParte

function finalDaHistoria() {
  console.clear();// limpando o terminal, para melhor visibilidade.
  console.log(
    `Ao chegar ao final da ${periodos[2]} um helicóptero surge do nada e resgata Michael da ilha.\nNo fim ele descobre que era tudo um reality show financiado por milhonários malucos que só queriam se entreter com seu sofrimento.\nMas Michael no fim recebe um prêmio de 2 milhões um agrado por todo "entretenimento" que concedeu aos milhonários!`
  );
  console.log();
  console.log(`Parabéns por sobreviver até aqui!`);
  return fimJogo(); // retorno que chama a funçao fimJogo
  i++;
}// finalizando função finalDaHistoria

// Começo do JOGO

// Estrutura de repetição que iniciar o jogo.
while (novoJogo == 0) {
  introducao();// chamando a função introducao de inicio.
  for (i = 0; i < 5; ) { // Estrutura de repetição que ira rodar os periodos(semanas) que se passa no jogo.(controle do tempo)
    personagem.Sede = 100;// Aqui iniciando status do personagem.
    personagem.Fome = 100;// Aqui iniciando status do personagem.
    personagem.Vida = 100;// Aqui iniciando status do personagem.
    // Condição para Controle dos periodos(Semanas), chamando as funçoes correspondente ao laço da estrutura for.
    if (i == 0) {// Condiçao quando i for igual a 0 ele iniciar a primeira semana.
      console.log(periodos[i]);
      console.log();
      primeiraParte();// chamando a função primeiraParte
      if (novoJogo == 1) {// condição para encerra o jogo no game over.
        break;
      }
    } else if (i == 1) {// Condiçao quando i for igual a 1 ele iniciar a segunda semana.
      console.log(periodos[i]);
      console.log();
      segundaParte();// chamando a função segundaParte
      if (novoJogo == 1) {// condição para encerra o jogo no game over.
        break;
      }
    } else if (i == 2) {// Condiçao quando i for igual a 2 ele iniciar a terceira semana.
      console.log(periodos[i]);
      console.log();
      terceiraParte();// chamando a função terceiraParte
      if (novoJogo == 1) {// condição para encerra o jogo no game over.
        break;
      }
    } else if (i == 3) {// Condiçao quando i for igual a 3 ele encerrar o jogo.
      console.log();
      finalDaHistoria();// chamando a função finalDaHistoria
      if (novoJogo == 1) {// condição para encerra o jogo no game over.
        break;
      } else {
        break;
      }
    }
  }
}
