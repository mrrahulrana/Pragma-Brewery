import { Container } from 'unstated';

import { getBeers } from '../services/beers';

class BeersContainer extends Container {
  state = {
    isLoading: true,
    list: [],
  };

  constructor() {
    super();
    this._loadBeers();
  }

  async _loadBeers() {
    const { data } = await getBeers();
    const beersWithStatus = data.map(beer => ({
      ...beer,
      status: this._setStatus(beer, beer.temperature),
    }));

    this.setState({
      list: beersWithStatus,
      isLoading: false,
    });
  }

  updateBeerTemperature = async beerUpdate => {
    const list = this.state.list.map(beer =>
      beer.id !== beerUpdate.id
        ? beer
        : {
            ...beer,
            temperature: beerUpdate.temperature,
            status: this._setStatus(beer, beerUpdate.temperature),
          },
    );

    await this.setState({ list });
  };

  _setStatus = (beer, temperature) => {
    const criticalDistance = 2;

    if (temperature > beer.maximumTemperature) {
      return temperature - beer.maximumTemperature > criticalDistance
        ? 'TOO_HIGH'
        : 'HIGH';
    }

    if (temperature < beer.minimumTemperature) {
      return beer.minimumTemperature - temperature > criticalDistance
        ? 'TOO_LOW'
        : 'LOW';
    }

    return 'OK';
  };
}

export default BeersContainer;
