import React from 'react';
import { Subscribe } from 'unstated';

import BeerItem from './BeerItem';
import BeersContainer from '../../containers/BeersContainer';

import './DevTools.css';

const DevTools = () => (
  <Subscribe to={[BeersContainer]}>
    {({ state, updateBeerTemperature }) => (
      <div className="devtools">
        <h2>Beers Temperature</h2>
        <p className="devtools__description">
          Simulate the temperature change.
        </p>

        {state.isLoading && (
          <span data-testid="devtools__loading">Loading...</span>
        )}

        {!state.isLoading &&
          state.list.map(beer => (
            <BeerItem
              key={beer.id}
              beer={beer}
              updateBeerTemperature={updateBeerTemperature}
            />
          ))}
      </div>
    )}
  </Subscribe>
);

export default DevTools;
