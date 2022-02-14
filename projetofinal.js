var prompt = require("prompt-sync")();

//Declaração de váriaveis e funções

const personagem = {
  Nome: "Michael",
  Sede: 100,
  Fome: 100,
  Vida: 100,
};

const periodos = ["PRIMEIRA-SEMANA:", "SEGUNDA-SEMANA:", "TERCEIRA-SEMANA:"];

const pausa = () => prompt(`Precione ENTER para continuar!`);

const escolhaErrada = () => console.log(`Você digitou uma opção incorreta!`);

function statusAtuais(michael) {
  console.log();
  console.log(`STATUS ATUAIS:`);
  console.table(michael);
}

let novoJogo = 0;
function fimJogo() {
  let escolha = prompt(`Deseja jogar novamente? SIM ou NAO: `)
    .toUpperCase()
    .trim();
  console.clear();

  while (escolha != "SIM" && escolha != "NAO") {
    escolhaErrada();
    escolha = prompt(`Deseja jogar novamente? SIM ou NAO: `)
      .toUpperCase()
      .trim();
    console.clear();
  }
  if (escolha == "SIM") {
    novoJogo = 0;
  } else {
    return novoJogo = 1;
  }
}

function introducao() {
  console.clear();
  console.log(`O jogo se chama SOBREVIVA!
Primeiramente vamos lhe apresentar o personagem e seus status:`);
  statusAtuais(personagem);
  console.log(`Se qualquer um dos STATUS de Michael chegar a 0 ele MORRE!`);
  pausa();
  console.clear();
}

function primeiraParte() {
  console.log(`Nossa história começa com Michael acordando em uma ilha completamente desconhecida. 
Michael olha para os lados e encontra algumas pedras afidas, tiras de couro e pedaços de madeira. 
O que lhe dá a ideia de criar um machado improvisado para ajudar nesse início de jornada.
Você cria o machado ou segue andando sem rumo em busca de algum alimento?`);

  let primeiraEscolha = prompt(`Escolha entre MACHADO ou ALIMENTO: `)
    .toUpperCase()
    .trim();
  console.clear();

  while (primeiraEscolha != "MACHADO" && primeiraEscolha != "ALIMENTO") {
    escolhaErrada();
    primeiraEscolha = prompt(`Escolha entre MACHADO ou ALIMENTO: `)
      .toUpperCase()
      .trim();
    console.clear();
  }

  if (primeiraEscolha == "ALIMENTO") {
    console.log(
      `Infelizmente sua busca por alimento não da muito certo e Michael acaba tropeçando e caindo em um imenso buraco.`
    );
    personagem.Vida = 0;
    statusAtuais(personagem);
    console.log(`Michael morre devido ao seu enorme tombo!`);
    fimJogo();
  } else {
    personagem.Sede = 40;
    personagem.Fome = 50;
    console.log(
      `Enquanto fazia seu machado Michael sente seu estomago roncar e sua garganta secar. 
    Mas já com algum equipamento em mão decide continuar sua jornada`
    );
    statusAtuais(personagem);
    pausa();
    console.clear();
    console.log(
      `Após quase uma semana na ilha, Michael ainda sofre muito para poder sobreviver.
      Ele encontra algumas frutas e consegue pegar alguns animais com seu machado.
      Mas a falta de água ainda era um grande problema.`
    );
    personagem.Fome = 100;
    personagem.Sede = 25;
    personagem.Vida = 100;
    statusAtuais(personagem);
    pausa();
    console.clear();
  }
}

function segundaParte() {
  console.log(`Michael decide primeiro resolver o seu problema com a água.`);
  personagem.Sede = 15;
  statusAtuais(personagem);
  pausa();
  console.clear();

  console.log(
    `Michael observa mais a frente uma floresta mais densa onde a probablidade de encontrar água potável seria maior.`
  );
  let segundaEscolha = prompt(
    `Deseja se aventurar pela floresta ou continuar sua busca no local onde está? Responda com SIM ou NAO: `
  )
    .toUpperCase()
    .trim();
  console.clear();
  while (segundaEscolha != "SIM" && segundaEscolha != "NAO") {
    escolhaErrada();
    segundaEscolha = prompt(
      `Deseja se aventurar pela floresta ou continuar sua busca no local onde está? Responda com SIM ou NAO: `
    )
      .toUpperCase()
      .trim();
    console.clear();
  }
  if (segundaEscolha == "NAO") {
    console.log(`Michael fica alguns dias rodando pelo mesmo lugar em busca de água potável mas infelizmente sua busca se prova inútil.
    Ele não consegue suportar forte calor e acaba desmaiando fortemente desidratado`);
    personagem.Sede = 0;
    statusAtuais(personagem);
    console.log(
      `Michael não resiste a falta de água e acaba morrendo por desidratação!`
    );
    fimJogo();
  } else {
    console.log(`Ao se aventurar pela floresta houveram alguns contratempos como arranhões e torções aparentemente nada tão ruim.
    Mas ele tira a sorte grande encontrando uma grande nascente por ali.`);
    personagem.Sede = 100;
    statusAtuais(personagem);
    pausa();
    console.clear();
  }
}

function terceiraParte() {
  console.log(
    `Quando Michael acha que está tudo resolvido ele começa a se sentir mal, provavelmente por alguma intoxicação.`
  );
  personagem.Vida = 65;
  statusAtuais(personagem);
  pausa();
  console.clear();
  console.log(`Michael decide que precisa contruir rapidamente um lugar para se recuperar antes que a sua situação piore.
  Usando novas ferramentas que criou ao longo desses dias ele rapidamente contrói um abrigo, mas a sua condição só piorava.`);
  personagem.Vida = 40;
  statusAtuais(personagem);
  pausa();
  console.clear();
  console.log(
    `Michael estava muito cansado e não sabia se era melhor sair em busca de alguma erva medicinal ou simplesmente descansava para se recuperar.`
  );
  let terceiraEscolha = prompt(`Escolha entre, SAIR ou DESCANSAR: `)
    .toUpperCase()
    .trim();
  console.clear();
  while (terceiraEscolha != "SAIR" && terceiraEscolha != "DESCANSAR") {
    escolhaErrada();
    terceiraEscolha = prompt(`Escolha entre, SAIR ou DESCANSAR: `)
      .toUpperCase()
      .trim();
    console.clear();
  }
  if (terceiraEscolha == "SAIR") {
    console.log(`Por mais que Michael tivesse algum conhecimento sobre ervas medicinais em um livro em que havia lido
    ele não consegue encontrar nenhuma em sua cansativa busca e desmaia de exaustão!`);
    personagem.Vida = 0;
    statusAtuais(personagem);
    console.log(`Michael morre devido ao seu desgaste e intoxicação!`)
    fimJogo();
  }else {
    console.log(`As vezes a melhor opção é realmente só descansar e esperar. 
    Após 2 dias Michael acorda e sente completamente renovado!`)
    personagem.Vida = 100;
    statusAtuais(personagem);
    pausa();
    console.clear();
    console.log(`Ao chegar ao final da ${periodos[2]} um helicóptero surge do nada e resgata Michael da ilha. 
    No fim ele descobre que era tudo um reality show financiado por milhonários malucos que só queriam se entreter com seu sofrimento.
    Mas Michael no fim recebe um prêmio de 2 milhões um agrado por todo "entretenimento" que concedeu aos milhonários!`);
    console.log();
    console.log(`Parabéns por sobreviver até aqui!`)
    fimJogo();
  }
}

//Começo do JOGO

while (novoJogo == 0) {
  personagem.Sede = 100;
  personagem.Fome = 100;
  personagem.Vida = 100;
  introducao();
  for (i = 0; i < 3; ) {
    if (i == 0) {
      console.log(periodos[i]);
      console.log();
      primeiraParte();
      i++;
    } else if (i == 1) {
      console.log(periodos[i]);
      console.log();
      segundaParte();
      i++;
    }else if(i == 2){
      console.log(periodos[i]);
      console.log();
      terceiraParte();
      i++
    }
  }
}
