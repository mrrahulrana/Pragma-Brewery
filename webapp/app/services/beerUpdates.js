const socket = require('socket.io-client');

const beerUpdates = beerId =>
  socket.connect('http://localhost:3000', {
    query: { id: beerId },
  });

export default beerUpdates;
