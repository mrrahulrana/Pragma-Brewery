const getBeers = require('./beers');

const routes = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  var url = req.url;

  if (url === '/beers') {
    getBeers(req, res);
    return;
  }

  res.statusCode = 404;
  res.end('Unknown path');
};

module.exports = routes;
