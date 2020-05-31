const { getSensorTemperature } = require('../services/temperatures');

const beerUpdates = socket => {
  const beerId = socket.handshake.query.id;

  console.log(`Client ${beerId} connected`);

  const temperaturePolling = setInterval(async () => {
    const { data } = await getSensorTemperature(beerId);
    socket.emit('beer_update', data);
  }, 5000);

  socket.on('disconnect', () => {
    clearInterval(temperaturePolling);
    console.log(`Client ${beerId} disconnected`);
  });
};

module.exports = beerUpdates;
