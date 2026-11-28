# Diário de Pescas

Sistema web para registrar pescarias e acompanhar o desempenho do pescador por meio de um dashboard.

## Contexto

Minha relação com a pesca começou na infância. Meus pais me tiveram muito jovens, com 21 anos, e por isso ainda não tinham uma casa própria. Durante os primeiros 7 anos da minha vida, morei com meus avós maternos, na zona leste de São Paulo. Meu avô sempre gostou muito de pescar, principalmente no Canal de Bertioga e em pequenos lagos perto de onde morávamos, e foi ele quem começou a me levar a esses lugares. Ali comecei a tomar gosto pela pescaria.

Quando eu tinha 7 anos, meus pais se casaram e fui morar na casa que meu pai comprou. Passei muitos anos sem pescar, até que, por volta dos meus 15 anos, meu pai voltou a ter o hábito. A família do meu pai também sempre gostou de pescar, e meu avô paterno costumava fazer excursões de pesca. Meu pai passou a frequentar pesqueiros, na maior parte das vezes, e também rios, e começou a me levar junto. Foi assim que retomei o gosto pela pesca, e essa atividade me aproximou muito dele.

Além da proximidade com a família, gosto da paz que a pesca proporciona e de aproveitar esses momentos com meu pai, meu avô e meus amigos. Dois lugares marcaram muito a minha história: o Pesqueiro Maeda e o Canal de Bertioga, onde sempre pesquei com meu avô, em um barco pequeno ao qual ele até acoplou um motor de 6 HP. Continuo pescando nesses lugares até hoje.

## Objetivo

Desenvolver, de forma individual e no prazo de 6 semanas, o Diário de Pescas, um sistema web que permite ao pescador criar uma conta, fazer login e registrar suas pescarias com data, local, modalidade, quantidade de peixes e nota. O sistema deve apresentar um dashboard com três indicadores (recorde de peixes, local mais produtivo e modalidade mais produtiva por média de peixes), dois gráficos (quantidade de peixes por mês, com meta definida pelo usuário, e ranking de modalidades por nota) e uma tabela com o histórico das pescarias. O projeto é viável porque utiliza tecnologias que já domino, como HTML, CSS e JavaScript no front-end, Node.js no back-end e MySQL como banco de dados. Sua relevância está em ajudar outros pescadores a organizar suas pescarias e a acompanhar sua evolução, a partir de dados registrados por eles mesmos.

## Justificativa

A pesca foi uma das atividades mais importantes da minha vida. Ela me aproximou do meu avô, na infância, e do meu pai, na adolescência, e me proporcionou momentos de paz ao lado de familiares e amigos. Lugares como o Canal de Bertioga e o Pesqueiro Maeda fazem parte dessas lembranças, e continuo pescando neles até hoje. Foi por essa ligação com a minha vida e com a minha família que escolhi a pesca como tema do meu projeto individual.

Cada pescaria carrega memórias que merecem ser guardadas. O Diário de Pescas permite que o pescador registre esses momentos, com data, local, modalidade, quantidade de peixes e nota, formando um histórico pessoal de tudo o que viveu. Diferente de um caderno, o sistema faz os cálculos e os gráficos automaticamente no dashboard, mostrando o recorde de peixes, o local e a modalidade mais produtivos e a evolução mensal, sem que o pescador precise somar ou comparar nada manualmente.

Dessa forma, o projeto é relevante para mim, por unir uma paixão pessoal à programação, e para outros pescadores, que ganham uma forma simples de preservar suas memórias e entender os próprios resultados.

## Como executar

O sistema roda de forma local, no navegador do computador.

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [MySQL Server](https://dev.mysql.com/downloads/mysql/) instalado e em execução

### Passo a passo

1. **Clone o repositório** e entre na pasta do projeto:

   ```bash
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>
   ```

2. **Crie o banco de dados no MySQL Server** antes de iniciar o sistema. O banco e as tabelas precisam existir para o sistema funcionar.

3. **Configure o arquivo `.env`** com os dados de conexão com o MySQL (usuário, senha e nome do banco).

4. **Instale as dependências:**

   ```bash
   npm install
   ```

5. **Inicie o sistema:**

   ```bash
   npm start
   ```

6. **Acesse no navegador:** [http://localhost:3333](http://localhost:3333)
