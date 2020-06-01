import BeersContainer from './BeersContainer';
import { getBeers } from '../services/beers';

jest.mock('../services/beers');

describe('BeersContainer', () => {
  afterEach(jest.clearAllMocks);

  const setup = async () => {
    const container = new BeersContainer();
    await container._loadBeers();

    return container;
  };

  it('should load the beers list', async () => {
    const container = await setup();

    expect(container.state.list).toHaveLength(1);
    expect(container.state.isLoading).toBe(false);
    expect(getBeers).toBeCalled();
  });

  it('should keep the last update on each beer', async () => {
    const container = await setup();

    const beerUpdate = {
      id: 'UENki',
      temperature: 2.5,
    };

    expect(container.state.list[0].temperature).toBe(5);

    await container.updateBeerTemperature(beerUpdate);

    expect(container.state.list[0].temperature).toBe(2.5);
  });

  it('should distinguish status by the current temperature', async () => {
    const container = await setup();

    const beerUpdate = {
      id: 'UENki',
    };

    const expectedStatus = [
      [10, 'TOO_HIGH'],
      [6.5, 'HIGH'],
      [6.1, 'HIGH'],
      [6, 'OK'],
      [5.9, 'OK'],
      [5.2, 'OK'],
      [5, 'OK'],
      [3.9, 'LOW'],
      [2.5, 'LOW'],
      [0, 'TOO_LOW'],
      [-5, 'TOO_LOW'],
    ];

    for (let i = 0; i < expectedStatus.length; i++) {
      await container.updateBeerTemperature({
        ...beerUpdate,
        temperature: expectedStatus[i][0],
      });

      expect(container.state.list[0].status).toBe(expectedStatus[i][1]);
    }
  });
});
