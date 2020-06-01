import React, { useEffect } from 'react';

import beerUpdates from '../../services/beerUpdates';

const useBeerUpdates = (beer, updateBeerTemperature) => {
  useEffect(() => {
    const socket = beerUpdates(beer.id);

    socket.on('beer_update', updateBeerTemperature);

    return () => socket.disconnect();
  }, []);
};

export default useBeerUpdates;
