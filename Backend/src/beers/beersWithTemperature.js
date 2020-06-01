const beers = require('../db/beers.json');
const { getSensorTemperature } = require('../services/temperatures');

const beersWithTemperature = () => {
  const requests = beers.map(beer => getSensorTemperature(beer.id));

  return Promise.all(requests).then(responses => {
    return responses.map(response => {
      const { id, temperature } = response.data;
      const currentBeer = beers.find(beer => beer.id === id);

      return { ...currentBeer, temperature };
    });
  });
};

module.exports = beersWithTemperature;
