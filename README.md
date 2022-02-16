![Alt ou título da imagem](https://2315530342-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-Mi99jjCn0YFUe30kpPL%2Fuploads%2FmFlzIcbVMgh6m16kALMg%2Fezgif.com-gif-maker%20(1).gif?alt=media&token=bcb684fe-45d5-4feb-a22b-8fb51c8c0022)
# <h1 align="center"> BlueEdTech Modulo 1 - Projeto Final </h1>

## Jogo de Ficção Interativa

Você irá criar um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, aventuras épicas, histórias assustadoras, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza pela história. Cada escolha irá gerar uma consequência diferente para o seu personagem. Você será responsável por determinar o inicio e término da história, além de avançar o tempo a cada escolha.

É importante que haja uma passagem de tempo e períodos determinados que determinarão os ciclos de repetição das possibilidades do personagem, por exemplo: Manhã, tarde, noite, dormir - Recomeça o ciclo.

### Requisitos

- Variáveis para armazenar os status do personagem (1,0 ponto);
- Perguntas que alterarão esses status do personagem (1,0 ponto);
- Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0 ponto);
- Variável para controle da passagem do tempo (1,0 ponto);
- Variáveis de controle dos status e situações da história (1,0 ponto);
- Condicionais para alterações dessas variáveis (1,5 ponto);
- Funções para executar cada uma das tarefas (1,5 ponto);
- Conteúdo de condicionais, laços, funções e objetos bem aplicados (2,0 pontos);

### Trabalho em equipe, Equipe 10º

- Bianca Novaes

- Leandro Spitzer

- Wellington Oliveira

## Desenvolvimento do Jogo

Jogo criado em JavaScript, rodar no Nodejs.

### Historia do Jogo
Um jogo de sobrevivencia, com personagem Michael, que acorda completamente desorientado em uma ilha sem saber como e o porque foi para ali, na qual ele tenta sobreviver por tres semanas, atras de alimentos, agua e abrigo. Interação Onde usuario ira fazer as escolhas por Michael, escolha essas dificeis que leva a sobrevivencia ou nao do personagem.

### Criação do codigo para interação com usuario

 - Criamos um Objeto, com chaves e valores para controle do status do personagem.
 ```javascript
 
 const personagem = { // Objeto Personagem.
  Nome: "Michael",// chave Nome, atribuimos um valor tipo string 'Michael' para nome do personagem.
  Sede: 100,// Chave Sede, atribuimos um valor tipo number, para controle de status sede do personagem
  Fome: 100,// Chave Fome, atribuimos um valor tipo number, para controle de status fome do personagem
  Vida: 100,// Chave Vida, atribuimos um valor tipo number, para controle de status Vida do personagem
};
 
 ```
   caso usuario venha a zerar os valores das chaves Sede, Fome, Vida, do personagem, sera fim do jogo.



 - Criamos uma Array para Armazenar o perido que personagem se encontra dentro do jogo.
 ```javascript
 const periodos = [
  "PRIMEIRA-SEMANA",
  "SEGUNDA-SEMANA",
  "TERCEIRA-SEMANA",
  "INICIO DO JOGO",
];
 ```


 - Para cada periodo do jogo foi criado funçoes que dentro dela tera metodos e chamara outras funçoes