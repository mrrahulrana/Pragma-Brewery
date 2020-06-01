const socket = require('socket.io-client');

const beerUpdates = beerId =>
  socket.connect(process.env.API_URL, {
    query: { id: beerId },
  });

export default beerUpdates;
