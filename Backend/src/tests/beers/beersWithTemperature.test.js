const beers = require('../../src/db/beers.json');
const beersWithTemperature = require('../../src/beers/beersWithTemperature');
const { getSensorTemperature } = require('../../src/services/temperatures');

jest.mock('../../src/services/temperatures');

describe('beersWithTemperature', () => {
  it('should set the current temperature of the sensor for each beer', async () => {
    const beers = await beersWithTemperature();

    expect(getSensorTemperature).toBeCalledTimes(beers.length);
    beers.forEach(beer => expect(beer.temperature).toBeDefined());
  });
});
