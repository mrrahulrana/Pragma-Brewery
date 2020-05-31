const axios = require('axios');

const getSensorTemperature = beerId =>
  axios(`https://temperature-sensor-service.herokuapp.com/sensor/${beerId}`);

module.exports.getSensorTemperature = getSensorTemperature;
