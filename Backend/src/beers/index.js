const beersWithTemperature = require('./beersWithTemperature');

module.exports = async (req, res) => {
  const beers = await beersWithTemperature();

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(beers));
};
