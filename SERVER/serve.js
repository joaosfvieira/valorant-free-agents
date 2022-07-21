const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/jogadores').get((request, response) => {
  response.send(PLAYERS);
});

app.route('/api/jogadores').post((request, response) => {
  let player = request.body;

  const firstId = PLAYERS ? Math.max.apply(null, PLAYERS.map(playerIterator => playerIterator.id)) + 1 : 1;
  player.id = firstId;
  PLAYERS.push(player);
  
  response.status(201).send(player);
});

app.route('/api/jogadores/:id').put((request, response) => {
  const playerId = +request.params['id'];
  const player = request.body;

  const index = PLAYERS.findIndex(playerIterator => playerIterator.id === playerId);
  PLAYERS[index] = player;

  response.status(200).send(player);
});

app.route('/api/jogadores/:id').get((request, response) => {
  const playerId = +request.params['id'];

  response.status(200).send(PLAYERS.find(playerIterator => playerIterator.id === playerId));
});

app.route('/api/jogadores/:id').delete((request, response)=> {
  const playerId = +request.params['id'];
  PLAYERS = PLAYERS.filter(playerIterator => playerIterator.id !== playerId);
  
  response.status(204).send({});
});

var PLAYERS = [
  {
    email: 'joaosouzafvieira@gmail.com',
    senha: '12345',
    id: 1,
    fName: 'Joao',
    lName: 'Vieira',
    nickName: 'SUN JOANINHA #RN084',
    role: 'Controlador',
    rank: 'Radiante',
    birthDate: 'August, 14, 2000',
    profilePic: '/assets/img/joaoProfilePic.jpg',
    rating: 5,
    sexo: 'm'
  },
  {
    email: 'chico@gmail.com',
    senha: '12345',
    id: 2,
    fName: 'Chico',
    lName: 'Medrado',
    nickName: 'chic0zera #PB083',
    role: 'Flex',
    rank: 'Imortal',
    birthDate: 'December, xx, 1998',
    profilePic: '/assets/img/chickProfilePic.jpg',
    rating: 4,
    sexo: 'm'
  },
  {
    email: 'victor@gmail.com',
    senha: '12345',
    id: 3,
    fName: 'Victor',
    lName: 'Veras',
    nickName: 'appa yip yip #PB083',
    role: 'Flex',
    rank: 'Platina',
    birthDate: 'January, xx, 1998',
    profilePic: '/assets/img/verasProfilePic.jpg',
    rating: 3,
    sexo: 'm'
  },
  {
    email: 'maria@gmail.com',
    senha: '12345',
    id: 4,
    fName: 'Maria',
    lName: 'Letícia',
    nickName: 'VOTE PCB 21 #PB083',
    role: 'Sentinela',
    rank: 'Platina',
    birthDate: 'May, xx, 1998',
    profilePic: '/assets/img/mary.png',
    rating: 3,
    sexo: 'f'
  },
  {
    email: 'rabelo@gmail.com',
    senha: '12345',
    id: 5,
    fName: 'Rabelo',
    lName: 'Apenas',
    nickName: 'rabelito #RN084',
    role: 'Duelista',
    rank: 'Diamante',
    birthDate: 'April, xx, 2000',
    profilePic: '/assets/img/rabeloProfilePic.jpg',
    rating: 4,
    sexo: 'm'
  }
];